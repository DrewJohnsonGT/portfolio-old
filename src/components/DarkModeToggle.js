import React from 'react';
import styled from 'styled-components';
import { WiMoonAltWaningCrescent5, WiMoonFull } from 'react-icons/wi';
import { BsSun } from 'react-icons/bs';
import { COLORS, MOBILE_SCREEN_WIDTH } from 'utils/constants';

const Root = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        left: 0;
        width: 50px;
    }
`;

const FullMoon = styled(WiMoonFull)`
    position: absolute;
    right: 0.25rem;
`;
const CresentMoon = styled(WiMoonAltWaningCrescent5)`
    position: absolute;
    right: 0.25rem;
    background-color: transparent;
`;
const Sun = styled(BsSun)`
    position: absolute;
    right: 0.25rem;
`;

const DarkModeToggle = ({ theme, onClick }) => (
    <Root onClick={() => onClick()}>
        {theme === 'light' ? (
            <Sun size={40} color={COLORS.YELLOW} />
        ) : (
            <>
                <FullMoon size={40} color='white' />
                <CresentMoon size={40} color={COLORS.PURPLE} />
            </>
        )}
    </Root>
);

export default DarkModeToggle;
