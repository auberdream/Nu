import React from 'react';
import { addDecorator } from '@storybook/react';
import { Helmet } from 'react-helmet';

import { Global } from '../src/styles/Global';

addDecorator(story => (
    <>
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300&family=Raleway:wght@100;200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <Global />
        {story()}
    </>
));
