import type React from 'react';
import { Box } from '@chakra-ui/react';

type TScrollProps = {
  offsetH: number;
};

const Scroll: React.FC<TScrollProps> = ({ offsetH, children }) => {
  return (
    <Box overflowY="auto" border="1px solid black" height={`calc(100vh - ${offsetH}px)`}>
      {children}
    </Box>
  );
};

export default Scroll;
