import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme, Box, Heading } from '@chakra-ui/react';

import { Fonts } from '../Fonts';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { IRobot } from '../typings/IRobot';

const theme = extendTheme({
    styles: {
        global: {
            "body": {
                width: "100%",
                height: "100%",
                bgGradient: "linear(to-r, teal.500, blue.900)",
                overflow: "hidden"
            }
        }
    }
});

const Main: React.FC = () => {
    const [allRobots, setAllRobots] = useState<IRobot[]>([]);
    const [filteredRobots, setFilteredRobots] = useState<IRobot[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchRobots = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setAllRobots(json);
        setTimeout(() => {setIsLoading(false);}, 3000);
    };

    useEffect(() => {
        fetchRobots();
    }, []);

    const handleSearchChange = (value: string) => {
        setSearchText(value);
    };

    useEffect(() => {
        setFilteredRobots(allRobots.filter(robot => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase());
        }));
    }, [allRobots, searchText]);

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box textAlign="center">
                <Heading as="h1" size="2xl" fontFamily="SEGA LOGO FONT" fontWeight={200} color="teal.300" m={5}>RoboFriends</Heading>
                {isLoading
                    ? <Heading color="gray.900" m={5}>Loading...</Heading>
                    : <React.Fragment>
                        <SearchBox onSearchChange={handleSearchChange} />
                        <Scroll offsetH={155}>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </React.Fragment>
                }
            </Box>
        </ChakraProvider>
    );
};

export default Main;
