import React from 'react';
import { Box } from '@chakra-ui/react';

const Scroll: React.FC = (props) => {
    return (
        <Box overflowY="auto" border="1px solid black" height="800px">
            {props.children}
        </Box>
    );
};

export default Scroll;
