import React from 'react';
import styled, { css } from 'styled-components';
import { WiMoonAltWaningCrescent5, WiMoonFull } from 'react-icons/wi';
import { BsSun } from 'react-icons/bs';
import { COLORS, MOBILE_SCREEN_WIDTH } from 'utils/constants';

const ICON_SIZE = 40;

const Root = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        position: absolute;
        right: ${ICON_SIZE}px;
    }
`;
const IconStyles = css`
    position: absolute;
    right: 0.25rem;
`;
const FullMoon = styled(WiMoonFull)`
    ${IconStyles};
    position: relative;
`;
const CresentMoon = styled(WiMoonAltWaningCrescent5)`
    ${IconStyles};
    background-color: transparent;
`;
const Sun = styled(BsSun)`
    ${IconStyles};
`;

const DarkModeToggle = ({ theme, onClick }) => (
    <Root onClick={() => onClick()}>
        {theme === 'light' ? (
            <Sun size={ICON_SIZE} color={COLORS.YELLOW} />
        ) : (
            <>
                <FullMoon size={ICON_SIZE} color='white' />
                <CresentMoon size={ICON_SIZE} color={COLORS.PURPLE} />
            </>
        )}
    </Root>
);

export default DarkModeToggle;
