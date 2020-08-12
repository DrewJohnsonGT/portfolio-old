import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillMessage, AiFillInfoCircle } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { TiLightbulb } from 'react-icons/ti';
import { RiArticleLine } from 'react-icons/ri';
import { MdGames } from 'react-icons/md';
import { COLORS, HEADER_HEIGHT } from 'utils/constants';

const OPACITY = 'DD';
const CUBE_SIZE = HEADER_HEIGHT * 0.8;
const TRANSLATE_Z = CUBE_SIZE / 2;
const SIDES = [
    // Front
    {
        label: 'Games',
        icon: MdGames,
        color: COLORS.ORANGE,
        rotateY: 0,
        route: 'games',
    },
    // Back
    {
        label: 'About',
        icon: AiFillInfoCircle,
        color: COLORS.ORANGE,
        rotateY: 180,
        route: 'about',
    },
    // Top
    {
        label: 'Posts',
        icon: RiArticleLine,
        color: COLORS.LIGHT_ORANGE,
        rotateX: 90,
        route: 'posts',
    },
    // Bottom
    {
        label: 'Projects',
        icon: TiLightbulb,
        color: COLORS.YELLOW,
        rotateX: -90,
        route: 'projects',
    },
    // Right
    {
        label: 'Resume',
        icon: BsBriefcaseFill,
        color: COLORS.RED,
        rotateY: 90,
        route: 'resume',
    },
    // Left
    {
        label: 'Contact',
        icon: AiFillMessage,
        color: COLORS.LIGHT_ORANGE,
        rotateY: -90,
        route: 'contact',
    },
];

const Root = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-${TRANSLATE_Z}px);
    transition: all 1s;
    cursor: pointer;
    ${({ isValidSide, rotateY = 0, rotateX = 0 }) => {
        return isValidSide
            ? css`
                  transform: translateZ(${-TRANSLATE_Z}px)
                      rotateY(${-rotateY}deg) rotateX(${-rotateX}deg);
                  &:hover,
                  &:active {
                      transform: translateZ(${-TRANSLATE_Z}px) rotateY(1turn)
                          rotateX(1turn);
                      transition: transform 2s linear;
                  }
              `
            : css`
                  animation: rotating 10s linear infinite;
                  @keyframes rotating {
                      from {
                          transform: translateZ(${-TRANSLATE_Z}px) rotateY(0)
                              rotateX(0);
                      }
                      to {
                          transform: translateZ(${-TRANSLATE_Z}px)
                              rotateY(360deg) rotateX(360deg);
                      }
                  }
              `;
    }};
`;

const Wrapper = styled.div`
    margin-left: ${HEADER_HEIGHT * 0.2}px;
    width: ${CUBE_SIZE}px;
    height: ${CUBE_SIZE}px;
    perspective: ${CUBE_SIZE * 3}px;
`;
const Side = styled.div`
    width: ${CUBE_SIZE}px;
    height: ${CUBE_SIZE}px;
    position: absolute;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ rotateY = 0, rotateX = 0, color }) => css`
        transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg)
            translateZ(${TRANSLATE_Z}px);
        background-color: ${color + OPACITY};
    `}
`;

const SideComponents = () =>
    SIDES.map((side) => {
        const Icon = side.icon;
        return (
            <Side {...side} key={side.label}>
                <Icon size={CUBE_SIZE * 0.65} color='white' />
            </Side>
        );
    });
const HeaderCube = ({ selectedPath }) => {
    const selectedSide = SIDES.find((s) => s.route === selectedPath);
    return (
        <Wrapper>
            <Root {...selectedSide} isValidSide={!!selectedSide}>
                {SideComponents()}
            </Root>
        </Wrapper>
    );
};

export default HeaderCube;
