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
const Skill = styled.div`
    will-change: animation;
    position: absolute;
    transition: all 0.3s;
    overflow: hidden;
    top: 0;
    z-index: 1;
    left: 0;
    width: 0;
    height: 0;
    ${({ score, windowHeight, maxSize, minSize }) => {
        const size = (maxSize - minSize) * (score / 100);
        const yOffset = Math.random() * (windowHeight - size) + size / 2;
        const travelTime = score * 0.75 + getRandomVariance(score / 2);
        const spinTime = score + getRandomVariance(score / 2);
        const delay = getRandomVariance(10);
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
const SkillIcon = styled.object`
    opacity: 0.25;
    height: 100%;
    width: 100%;
    display: block;
`;

const Name = styled.h1`
    text-align: center;
    padding: 0.5rem;
    font-family: 'Cube1', 'cube2';
    color: ${({ theme }) => theme.colorHighEmphasis};
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        text-align: left;
        font-size: 1rem;
    }
`;
const Slogan = styled.h2`
    text-align: center;
    padding: 0.5rem;
    font-size: 1.75rem;
    font-family: 'Qube1', 'Qube2';
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        text-align: left;
        font-size: 1rem;
    }
`;

const HomePage = () => {
    const windowDimensions = useWindowSize();
    const windowHeight =
        windowDimensions.height - FOOTER_HEIGHT - HEADER_HEIGHT;
    const maxIconSize = windowHeight * 0.25;
    const minIconSize = windowHeight * 0.025;
    return (
        <Wrapper>
            {/* Wait for windowHeight to be gathered in Safari before rendering animations */}
            {windowHeight > 0 &&
                Skills.map(({ icon, score }, index) => (
                    <Skill
                        key={index}
                        score={score}
                        windowHeight={windowHeight}
                        minSize={minIconSize}
                        maxSize={maxIconSize}>
                        <SkillIcon data={icon} type='image/svg+xml' />
                    </Skill>
                ))}
            <Name>Drew Johnson</Name>
            <Slogan>Always building something</Slogan>
        </Wrapper>
    );
};

export default HomePage;
