import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Root = styled(Img)`
    flex: 1;
    border-radius: 3px;
`;
const Wrapper = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colorLowEmphasis};
`;

const Image = ({
    image: {
        childImageSharp: { fluid },
    },
}) => (
    <Wrapper>
        <Root fluid={fluid} />
    </Wrapper>
);

export default Image;
