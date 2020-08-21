import React from 'react';
import styled from 'styled-components';

const Root = styled.ul``;

const Element = styled.li`
    color: ${({ theme }) => theme.colorMidEmphasis};
`;

const UnorderedList = ({ elements }) => (
    <Root>
        {elements.map((element, index) => (
            <Element key={index}>{element}</Element>
        ))}
    </Root>
);

export default UnorderedList;
