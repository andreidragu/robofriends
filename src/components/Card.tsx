import type React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

type TCardProps = {
    name: string;
    username: string;
    email: string;
};

const Card: React.FC<TCardProps> = ({ username, name, email }) => {
    return (
        <Box
            d="inline-grid"
            bg="green.200"
            maxW="300px"
            height="360px"
            rounded="md"
            p={4}
            m={4}
            boxShadow="md"
            _hover={{ transform: "scale(1.05)" }}
            transition="all .2s ease-in-out"
        >
            <Image
                alt="avatar of a robot"
                src={`https://robohash.org/${username}?size=250x250`}
                fallbackSrc="placeholder_robot.png" mx="auto"
            />
            <Box textAlign="center">
                <Heading as="h3" size="md">{name}</Heading>
                <Text fontSize="md" mt="1">{email.toLowerCase()}</Text>
            </Box>
        </Box>
    );
};

export default Card;
