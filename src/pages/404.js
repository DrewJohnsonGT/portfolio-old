import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'utils/constants';
import Pug from 'assets/images/pug.png';

const Text = styled.h1`
    font-size: 1.75em;
    text-align: center;

    color: ${COLORS.DARK_ORANGE_TEXT};
`;
const PugImage = styled.img`
    width: 250px;
    height: 250px;
    animation: wiggle 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    cursor: pointer;
    @keyframes wiggle {
        from {
            transform: rotate(20deg);
        }
        to {
            transform: rotate(-20deg);
        }
    }
`;
const NotFoundPage = () => (
    <>
        <Text>404: NOT FOUND</Text>
        <PugImage src={Pug} alt='Sad pug'></PugImage>
        <Text>This page doesn't exist :/</Text>
    </>
);

export default NotFoundPage;
