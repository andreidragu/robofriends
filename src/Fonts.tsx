import React from 'react';
import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'SEGA LOGO FONT';
                font-style: normal;
                font-weight: normal;
                font-display: swap;
                src: local('SEGA LOGO FONT'), url(SEGA.woff) format('woff');
            }
        `}
    />
);
