import type React from 'react';
import { useEffect, useMemo } from 'react';
import { ChakraProvider, extendTheme, Box, Heading, Text } from '@chakra-ui/react';

import Fonts from '../components/Fonts';
import Header from './Header';
import SearchBox from './SearchBox';
import Robots from './Robots';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchRobotsStart } from '../redux/robots/robots.slice';
import { searchFieldTyping } from '../redux/search/search.slice';

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
    const searchField = useAppSelector(state => state.searchState.searchField);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRobotsStart());
    }, [dispatch]);

    const searchBoxComponent = useMemo(() => {
        const handleSearchChange = (value: string) => {
            dispatch(searchFieldTyping(value));
        };

        return (
            <SearchBox onSearchChange={handleSearchChange} />
        );
    }, [dispatch]);

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box textAlign="center">
                <Header />
                {isLoading
                    ? <Heading color="teal.300" m={5}>Loading...</Heading>
                    : errorMessage
                        ? <Text fontSize="md" mt="1">{errorMessage}</Text>
                        : <>
                            {searchBoxComponent}
                            {filteredRobots.length
                                ? <Robots robots={filteredRobots} />
                                : <Text fontSize="lg" mt="2" color="teal.300">No robots found :(</Text>
                            }
                        </>
                }
            </Box>
        </ChakraProvider>
    );
};

export default Main;
