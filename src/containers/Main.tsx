import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme, Box, Heading, Text } from '@chakra-ui/react';

import { Fonts } from '../components/Fonts';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchRobotsStart } from '../redux/robots/robots.slice';

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
    const robots = useAppSelector(state => state.robotsState.robots);
    const isLoading = useAppSelector(state => state.robotsState.isFetching);
    const errorMessage = useAppSelector(state => state.robotsState.errorMessage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRobotsStart());
    }, [dispatch]);

    const [searchField, setSearchField] = useState<string>('');

    const handleSearchChange = (value: string) => {
        setSearchField(value);
    };

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box textAlign="center">
                <Heading as="h1" size="2xl" fontFamily="SEGA LOGO FONT" fontWeight={200} color="teal.300" m={5}>RoboFriends</Heading>
                {isLoading
                    ? <Heading color="gray.900" m={5}>Loading...</Heading>
                    : errorMessage
                        ? <Text fontSize="md" mt="1">{errorMessage}</Text>
                        : <React.Fragment>
                            <SearchBox onSearchChange={handleSearchChange} />
                            <Scroll offsetH={155}>
                                <ErrorBoundary>
                                    <CardList robots={filteredRobots} />
                                </ErrorBoundary>
                            </Scroll>
                        </React.Fragment>
                }
            </Box>
        </ChakraProvider>
    );
};

export default Main;
