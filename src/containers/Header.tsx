import React from 'react';
import { Heading } from '@chakra-ui/react';

const Header: React.FC = React.memo(() => {
    return (
        <Heading
            as="h1"
            size="2xl"
            fontFamily="SEGA LOGO FONT"
            fontWeight={200}
            color="teal.300" m={5}
        >
            RoboFriends
        </Heading>
    );
});

export default Header;
