import React from 'react';
import styled, { css } from 'styled-components';
import {
    FaHome,
    FaQuestion,
    FaBook,
    FaBlog,
    FaPencilAlt,
    FaChartLine,
} from 'react-icons/fa';
import { COLORS } from '../utils/constants';

const OPACITY = 'DD';
const CUBE_SIZE = 40;
const SIDES = [
    // Front
    {
        label: 'Home',
        icon: FaHome,
        color: COLORS.ORANGE,
        rotateY: 0,
        translateZ: CUBE_SIZE / 2,
        route: 'home',
    },
    // Back
    {
        label: 'About',
        icon: FaQuestion,
        color: COLORS.ORANGE,
        rotateY: 180,
        translateZ: CUBE_SIZE / 2,
        route: 'about',
    },
    // Top
    {
        label: 'Resources',
        icon: FaBook,
        color: COLORS.DARK_ORANGE,
        rotateX: 90,
        translateZ: CUBE_SIZE / 2,
        route: 'resources',
    },
    // Bottom
    {
        label: 'Problems',
        icon: FaPencilAlt,
        color: COLORS.YELLOW,
        rotateX: -90,
        translateZ: CUBE_SIZE / 2,
        route: 'problems',
    },
    // Right
    {
        label: 'Stats',
        icon: FaChartLine,
        color: COLORS.RED,
        rotateY: 90,
        translateZ: CUBE_SIZE / 2,
        route: 'stats',
    },
    // Left
    {
        label: 'Blog',
        icon: FaBlog,
        color: COLORS.LIGHT_ORANGE,
        rotateY: -90,
        translateZ: CUBE_SIZE / 2,
        route: 'blog',
    },
];

const Root = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-${CUBE_SIZE / 2}px);
    transition: transform 1s;
    ${({ translateZ, rotateY = 0, rotateX = 0 }) => css`
        transform: translateZ(${-translateZ}px) rotateY(${-rotateY}deg)
            rotateX(${-rotateX}deg);
    `}
    animation: rotate 8s linear infinite;
    @keyframes rotate {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }
`;

const Wrapper = styled.div`
    width: ${CUBE_SIZE}px;
    height: ${CUBE_SIZE}px;
    perspective: ${CUBE_SIZE * 3}px;
    margin: 1rem;
`;
const Side = styled.div`
    position: absolute;
    width: ${CUBE_SIZE}px;
    height: ${CUBE_SIZE}px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid black;
    ${({ rotateY = 0, translateZ, rotateX = 0, color }) => css`
        transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg)
            translateZ(${translateZ}px);
        background-color: ${color + OPACITY};
    `}
`;

const SideComponents = SIDES.map((side) => {
    const Icon = side.icon;
    return (
        <Side {...side} key={side.label}>
            <Icon size={CUBE_SIZE * 0.65} color='white' />
        </Side>
    );
});
const Cube = ({ selectedPath }) => {
    const selectedSide =
        SIDES.find((s) => s.route === selectedPath) || SIDES[0];
    return (
        <Wrapper>
            <Root {...selectedSide}>{SideComponents}</Root>
        </Wrapper>
    );
};

export default Cube;
