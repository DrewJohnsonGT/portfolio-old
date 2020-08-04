import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'utils/constants';

// const Jeff = styled(Img)`
//     width: 200px;
//     -webkit-filter: drop-shadow(2px 1px 0 white) drop-shadow(-1px -1px 0 white);
//     filter: drop-shadow(2px 1px 0 white) drop-shadow(-1px -1px 0 white);
//     cursor: pointer;
//     &:hover {
//         -webkit-filter: drop-shadow(4px 4px 0 #db5700)
//             drop-shadow(-4px -4px 0 #db5700);
//         filter: drop-shadow(4px 4px 0 #db5700) drop-shadow(-4px -4px 0 #db5700);
//     }
// `;
// Skills

// const SkillIcon = styled.div`
//     opacity: 0.6;
//     position: absolute;
//     top: 0;
//     z-index: 1;
//     left: -100px;
//     ${() => {
//         const offset = Math.random() * 100;
//         const travelSpeed = Math.max(Math.random() * 45, 10);
//         const spinSpeed = Math.max(Math.random() * 15, 5);
//         const delay = Math.random() * 5;
//         return css`
//             top: ${offset - 10 > 0 ? offset - 10 : offset}%;
//             animation: shooting ${travelSpeed}s infinite ${delay}s linear,
//                 spin ${spinSpeed}s infinite linear;
//         `;
//     }}
//     @keyframes shooting {
//         from {
//             left: -100px;
//         }
//         to {
//             left: calc(100% + 100px);
//         }
//     }
//     @keyframes spin {
//         100% {
//             transform: rotate(360deg);
//         }
//     }
// `;

const Title = styled.div`
    font-family: 'Cube1', 'cube2';
    color: ${COLORS.DARK_ORANGE};
`;
const HomePage = () => {
    return (
        <>
            <Title>Drew Johnson</Title>
        </>
    );
};

export default HomePage;
