import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/index';
import Pug from 'assets/images/pug.png';

const Label = styled(Text)`
    text-align: center;
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
        <Label type='subheader1'>404: NOT FOUND</Label>
        <PugImage src={Pug} alt='Sad pug'></PugImage>
        <Label type='subheader1'>This page doesn't exist :(</Label>
    </>
);

export default NotFoundPage;
