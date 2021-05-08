import type React from 'react';
import { Global } from '@emotion/react';

const Fonts: React.FC = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'SEGA LOGO FONT';
                font-style: normal;
                font-weight: normal;
                font-display: swap;
                src: local('SEGA LOGO FONT'), url(${process.env.PUBLIC_URL}/SEGA.woff) format('woff');
            }
        `}
    />
);

export default Fonts;
