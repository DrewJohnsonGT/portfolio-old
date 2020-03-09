import React from 'react';
import styled from 'styled-components';
import GTLogo from '../../assets/images/georgia_tech_logo.svg';
import BuzzLogo from '../../assets/images/buzz_logo.png';
import { Cube } from '../index';
import { COLORS } from '../../utils/constants';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
`;
const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: white;
    max-width: 800px;
    margin: 1rem;
    padding: 0.5em;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
const Icon = styled.img`
    height: 100px;
    width: 100px;
`;
const TextDiv = styled.div``;
const Text = styled.div`
    font-size: 1.35em;
    @media (max-width: 600px) {
        text-align: center;
    }
    color: ${COLORS.darkOrangeText};
`;
const List = styled.ul`
    list-style-image: url(${BuzzLogo});
`;
const ListItem = styled.li`
    font-size: 1.25em;
    color: ${COLORS.darkOrangeText};
`;
const ExternalLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;
const CubeDiv = styled.div``;

const OtherStuff = () => (
    <Root>
        <Item>
            <Icon src={GTLogo} alt="Georgia Tech Logo"></Icon>
            <TextDiv>
                <Text>I'm a Ramblin' Wreck from Georgia Tech!</Text>
                <List>
                    <ListItem>
                        Threads in <b>Machine Learning</b> and{' '}
                        <b>Artificial Intelligence</b>
                    </ListItem>
                    <ListItem>Class of 2017 - Dean's List 2015/2016</ListItem>
                    <ListItem>Go Jackets!</ListItem>
                </List>
            </TextDiv>
        </Item>
        <Item>
            <CubeDiv>
                <Cube />
            </CubeDiv>
            <Text>
                I have a personal Blog/Site (
                <ExternalLink
                    onClick={() =>
                        window.open('https://cubecode.dev', '_blank')
                    }
                >
                    https://CubeCode.dev
                </ExternalLink>
                ) tracking my programming interview practice progress
            </Text>
        </Item>
    </Root>
);

export default OtherStuff;
