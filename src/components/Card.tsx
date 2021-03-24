import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

type CardProps = {
    name: string;
    username: string;
    email: string;
};

const Card: React.FC<CardProps> = ({ username, name, email }) => {
    return (
        <Box d="inline-grid" bg="green.400" maxW="330px" height="470px" overflow="hidden" rounded="md" p={4} m={4} boxShadow="md" _hover={{ transform: "scale(1.05)" }} transition="all .2s ease-in-out">
            <Image alt="avatar of a robot" src={`https://robohash.org/${username}?size=300x300`} mx="auto" />
            <Box textAlign="center">
                <Heading>{name}</Heading>
                <Text>{email}</Text>
            </Box>
        </Box>
    );
};

export default Card;
