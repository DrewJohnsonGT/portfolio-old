import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, MOBILE_SCREEN_WIDTH } from 'utils/constants';

const BOX_SHADOW_SIZE = 3;

const InputStyles = css`
    display: flex;
    padding: 0.5rem;
    margin: 1.25rem;
    font-size: 1.25rem;
    border-radius: 2px;
    color: ${({ theme }) => theme.colorHighEmphasis};
    background-color: ${({ theme }) => theme.offBackground};
    border: 3px solid ${({ theme }) => theme.colorHighEmphasis};
    border-radius: 1;
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        width: calc(100% - 2rem);
    }
    &:focus {
        box-shadow: 0 0 0 ${BOX_SHADOW_SIZE}px
            ${({ theme }) => theme.colorHighEmphasis};
        outline: none;
    }
    &:hover {
        box-shadow: 0 0 0 ${BOX_SHADOW_SIZE}px
            ${({ theme }) => theme.colorHighEmphasis};
    }
    ${({ error }) =>
        error &&
        css`
            box-shadow: 0 0 0 ${BOX_SHADOW_SIZE}px ${COLORS.RED};
        `}
`;
const RootInput = styled.input`
    ${InputStyles};
`;
const RootTextArea = styled.textarea`
    ${InputStyles};
`;

const TextInput = ({ onChange, type, ...props }) => {
    const InputComponent = type === 'textarea' ? RootTextArea : RootInput;
    return (
        <InputComponent onChange={(e) => onChange(e.target.value)} {...props} />
    );
};

export default TextInput;
