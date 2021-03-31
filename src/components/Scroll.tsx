import React from 'react';
import { Box } from '@chakra-ui/react';

type ScrollProps = {
    offsetH: number;
};

const Scroll: React.FC<ScrollProps> = ({ offsetH, children }) => {
    return (
        <Box overflowY="auto" border="1px solid black" height={`calc(100vh - ${offsetH}px)`}>
            {children}
        </Box>
    );
};

export default Scroll;
