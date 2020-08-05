import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../utils/constants';

const TypeToggleDiv = styled.div`
    display: flex;
    justify-content: center;
`;
const ToggleElementBody = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    margin: 1rem;
    margin-bottom: 0.1rem;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
const ToggleElement = styled.div`
    background-color: ${COLORS.OFF_WHITE};
    padding: 0.25rem;
    height: 40px;
    margin: 0;
    width: 65px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.DARK_ORANGE};
    cursor: pointer;
    ${({ selected }) =>
        selected
            ? css`
                  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.2);
                  background-color: ${COLORS.DARK_ORANGE};
                  color: white;
              `
            : css`
                  background-color: white;
              `}
    ${({ side }) => css`
        border-top-right-radius: ${side === 'right' ? 'inherit' : 0};
        border-bottom-right-radius: ${side === 'right' ? 'inherit' : 0};
        border-top-left-radius: ${side === 'right' ? 0 : 'inherit'};
        border-bottom-left-radius: ${side === 'right' ? 0 : 'inherit'};
    `}
`;

const ToggleButton = ({ left, right }) => (
    <TypeToggleDiv>
        <ToggleElementBody>
            <ToggleElement
                selected={left.selected}
                onClick={() => left.onClick()}
                side='left'>
                {left.label}
            </ToggleElement>
            <ToggleElement
                selected={right.selected}
                onClick={() => right.onClick()}
                side='right'>
                {right.label}
            </ToggleElement>
        </ToggleElementBody>
    </TypeToggleDiv>
);

export default ToggleButton;
