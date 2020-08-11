import React from 'react';
import styled, { css } from 'styled-components';
import Skills from 'assets/icons/logos';
import { getRandomVariance } from 'utils/helpers';
import { useWindowSize } from 'utils/hooks';
import {
    MOBILE_SCREEN_WIDTH,
    HEADER_HEIGHT,
    FOOTER_HEIGHT,
} from 'utils/constants';

const Wrapper = styled.div`
    height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    align-items: center;
    overflow: hidden;
`;
const SkillIcon = styled.img`
    will-change: animation;
    opacity: 0.2;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 0;
    height: 0;
    ${({ score, windowHeight, maxSize, minSize }) => {
        const size = (maxSize - minSize) * (score / 100);
        const yOffset =
            Math.random() * (windowHeight - size / 2 - size / 2) + size / 2;
        const travelTime = score * 0.75 + getRandomVariance(score / 2);
        const spinTime = score + getRandomVariance(score / 2);
        const delay = -getRandomVariance(10);
        return css`
            animation: shooting ${travelTime}s infinite ${delay}s linear,
                spin ${spinTime}s infinite linear;
            width: ${size}px;
            height: ${size}px;
            top: ${yOffset}px;
            left: -${maxSize + getRandomVariance(size, true)}px;
            @keyframes shooting {
                from {
                    left: -${maxSize}px;
                }
                to {
                    left: calc(100% + ${maxSize}px);
                }
            }
        `;
    }}
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Name = styled.h1`
    padding: 0.5rem;
    font-family: 'Cube1', 'cube2';
    color: ${({ theme }) => theme.colorHighEmphasis};
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        font-size: 1.25rem;
    }
`;
const Slogan = styled.h2`
    padding: 0.5rem;
    font-size: 1.75rem;
    font-family: 'Qube1', 'Qube2';
`;

const HomePage = () => {
    const windowHeight = useWindowSize().height - FOOTER_HEIGHT - HEADER_HEIGHT;
    const maxIconSize = windowHeight * 0.25;
    const minIconSize = windowHeight * 0.025;
    return (
        <>
            <Wrapper>
                {Skills.map(({ icon, score }) => (
                    <SkillIcon
                        key={icon}
                        src={icon}
                        score={score}
                        windowHeight={windowHeight}
                        minSize={minIconSize}
                        maxSize={maxIconSize}
                    />
                ))}
                <Name>Drew Johnson</Name>
                <Slogan>Always building something</Slogan>
            </Wrapper>
        </>
    );
};

export default HomePage;
