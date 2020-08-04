import React from 'react';
import { Layout } from 'components/index';

const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
