import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme, Box, Heading } from '@chakra-ui/react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { allRobots, Robot } from './datasets/robots';


const Main: React.FC = () => {
    const [robots, setRobots] = useState<Robot[]>([]);
    const [searchRobot, setSearchRobot] = useState<string>('');

    const handleSearchChange = (value: string) => {
        setSearchRobot(value);
    };

    useEffect(() => {
        setRobots(allRobots.filter(robot => {
            return robot.name.toLowerCase().includes(searchRobot.toLowerCase());
        }));
    }, [searchRobot]);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center">
                <Heading>RoboFriends</Heading>
                <SearchBox onSearchChange={handleSearchChange} />
                <CardList robots={robots} />
            </Box>
        </ChakraProvider>
    );
};

export default Main;
