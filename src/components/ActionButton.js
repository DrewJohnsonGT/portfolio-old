import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'utils/constants';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background-color: ${COLORS.DARK_ORANGE};
    color: white;
    padding: 0.25rem;
    border: 0 solid transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transform: scale(0.95);
    ${({ disabled }) =>
        disabled
            ? css`
                  transform: scale(0.9);
                  color: ${COLORS.DISABLED_TEXT};
                  background-color: ${COLORS.DISABLED};
                  cursor: not-allowed;
              `
            : css`
                  &:hover {
                      background-color: ${COLORS.ORANGE};
                      box-shadow: 0px 15px 25px -5px rgba(0, 0, 0, 0.2);
                      border: 4px solid ${({ theme }) => theme.colorMidEmphasis};
                      transform: scale(1);
                  }
                  &:active {
                      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                      border: 4px solid ${({ theme }) => theme.colorMidEmphasis};
                      transform: scale(0.975);
                  }
              `}
`;
const ActionButton = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
);

export default ActionButton;
