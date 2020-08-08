import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillMessage, AiFillInfoCircle } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { TiLightbulb } from 'react-icons/ti';
import { RiArticleLine } from 'react-icons/ri';
import { COLORS, HEADER_HEIGHT } from 'utils/constants';

const OPACITY = 'DD';
const CUBE_SIZE = HEADER_HEIGHT * 0.8;
const SIDES = [
    // Front
    {
        label: 'Home',
        icon: FaHome,
        color: COLORS.ORANGE,
        rotateY: 0,
        translateZ: CUBE_SIZE / 2,
        route: '',
    },
    // Back
    {
        label: 'About',
        icon: AiFillInfoCircle,
        color: COLORS.ORANGE,
        rotateY: 180,
        translateZ: CUBE_SIZE / 2,
        route: 'about',
    },
    // Top
    {
        label: 'Posts',
        icon: RiArticleLine,
        color: COLORS.LIGHT_ORANGE,
        rotateX: 90,
        translateZ: CUBE_SIZE / 2,
        route: 'posts',
    },
    // Bottom
    {
        label: 'Projects',
        icon: TiLightbulb,
        color: COLORS.YELLOW,
        rotateX: -90,
        translateZ: CUBE_SIZE / 2,
        route: 'projects',
    },
    // Right
    {
        label: 'Resume',
        icon: BsBriefcaseFill,
        color: COLORS.RED,
        rotateY: 90,
        translateZ: CUBE_SIZE / 2,
        route: 'resume',
    },
    // Left
    {
        label: 'Contact',
        icon: AiFillMessage,
        color: COLORS.LIGHT_ORANGE,
        rotateY: -90,
        translateZ: CUBE_SIZE / 2,
        route: 'contact',
    },
];

const Root = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-${CUBE_SIZE / 2}px);
    transition: all 1s;
    cursor: pointer;
    ${({ translateZ, rotateY = 0, rotateX = 0 }) => css`
        transform: translateZ(${-translateZ}px) rotateY(${-rotateY}deg)
            rotateX(${-rotateX}deg);
        &:hover,
        &:active {
            transform: translateZ(${-translateZ}px) rotateY(1turn)
                rotateX(1turn);
            transition: transform 2s linear;
        }
    `};
`;

const Wrapper = styled.div`
    margin-left: ${HEADER_HEIGHT * 0.2}px;
    ${({ cubeSize }) => css`
        width: ${cubeSize}px;
        height: ${cubeSize}px;
        perspective: ${cubeSize * 3}px;
    `}
`;
const Side = styled.div`
    ${({ cubeSize }) => css`
        width: ${cubeSize}px;
        height: ${cubeSize}px;
    `}
    position: absolute;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ rotateY = 0, translateZ, rotateX = 0, color }) => css`
        transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg)
            translateZ(${translateZ}px);
        background-color: ${color + OPACITY};
    `}
`;

const SideComponents = (sides, cubeSize) =>
    sides.map((side) => {
        const Icon = side.icon;
        return (
            <Side {...side} cubeSize={cubeSize} key={side.label}>
                <Icon size={cubeSize * 0.65} color='white' />
            </Side>
        );
    });
const HeaderCube = ({ selectedPath, cubeSize = CUBE_SIZE, ...props }) => {
    // map cubeSize dependent field(s)
    const sides = SIDES.map((side) => {
        side.translateZ = cubeSize / 2;
        return side;
    });
    const selectedSide =
        sides.find((s) => s.route === selectedPath) || sides[0];
    return (
        <Wrapper cubeSize={cubeSize}>
            <Root {...selectedSide} {...props}>
                {SideComponents(sides, cubeSize)}
            </Root>
        </Wrapper>
    );
};

export default HeaderCube;
