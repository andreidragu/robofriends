import type React from 'react';
import { memo as ReactMemo } from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/react';

type THeadingProps = {
  size?: string;
  fontFamily?: string;
  fontWeight?: number | string;
};

const Heading: React.FC<THeadingProps> = ReactMemo(props => {
  const { children, size = "xl", fontFamily = "heading", fontWeight = "bold" } = props;

  return (
    <ChakraHeading
      size={size}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      color="teal.300"
      m={5}
    >
      {children}
    </ChakraHeading>
  );
});
Heading.displayName = 'Heading';

export default Heading;
