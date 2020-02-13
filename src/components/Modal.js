import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../utils/constants';
import ActionButton from './ActionButton';

const Root = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    min-width: 200px;
    max-width: 450px;
    max-height: 500px;
    bottom: 100%;
    border-radius: 4px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    background-color: white;
    z-index: 101;
    ${({ open }) =>
        open &&
        css`
            display: flex;
            bottom: calc(50% - 200px);
        `}
`;
const Wrapper = styled.div`
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    ${({ open }) =>
        open &&
        css`
            display: flex;
        `}
`;
const Title = styled.div`
    font-size: 1.75em;
    font-weight: 500;
    width: calc(100% - 0.5em);
    color: white;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.25em;
    word-wrap: break-word;
    background-color: ${COLORS.lightOrange};
    text-align: center;
`;
const Message = styled.div`
    font-size: 1.35em;
    color: ${COLORS.darkOrangeText};
    display: flex;
    flex-direction: row;
    flex: 1;
    max-width: 100%;
    padding: 0.5em;
    overflow: auto;
    word-wrap: break-word;
    align-items: center;
    text-align: center;
`;
const Button = styled(ActionButton)`
    font-size: 1.5em;
    width: calc(100% - 1em);
    margin: 0;
`;
const ButtonDiv = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    padding: 0.5em 0;
    text-align: center;
    flex: 0;
`;

const Modal = ({ open, title, message, handleClose, buttonText = 'Okay' }) => (
    <Wrapper open={open} onClick={handleClose}>
        <Root open={open} onClick={e => e.stopPropagation()}>
            <Title>{title}</Title>
            <Message>{message}</Message>
            <ButtonDiv>
                <Button onClick={handleClose}>{buttonText}</Button>
            </ButtonDiv>
        </Root>
    </Wrapper>
);

export default Modal;
