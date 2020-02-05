import React from 'react'
import { Layout, SEO } from 'components/index'
import styled from 'styled-components'
import { Colors } from '../utils/constants'
import Pug from '../assets/images/pug.png'

const Root = styled.div`
    height: calc(100vh - 90px);
    margin: 0;
    background-color: ${Colors.offWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Text = styled.h1`
    font-size: 1.75em;
    text-align: center;

    color: ${Colors.darkOrangeText};
`
const PugImage = styled.img`
    height: 250px;
    width: 250px;
`
const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Root>
            <Text>404: NOT FOUND</Text>
            <PugImage src={Pug} alt="Sad pug"></PugImage>
            <Text>This page doesn't exist :/</Text>
        </Root>
    </Layout>
)

export default NotFoundPage
