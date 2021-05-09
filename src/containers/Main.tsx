import type React from 'react';
import { useEffect } from 'react';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';

import Fonts from '../components/Fonts';
import Heading from './Heading';
import SearchBox from './SearchBox';
import Robots from './Robots';

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
  const searchField = useAppSelector(state => state.searchState.searchField);
  const isLoading = useAppSelector(state => state.robotsState.isFetching);
  const errorMessage = useAppSelector(state => state.robotsState.errorMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRobotsStart());
  }, [dispatch]);

  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box textAlign="center">
        <Heading size="2xl" fontFamily="SEGA LOGO FONT" fontWeight={200}>RoboFriends</Heading>
        {isLoading
          ? <Heading>Loading...</Heading>
          : errorMessage
            ? <Heading>{errorMessage}</Heading>
            : <>
              <SearchBox />
              {filteredRobots.length
                ? <Robots robots={filteredRobots} />
                : <Heading size="l">No robots found :(</Heading>
              }
            </>
        }
      </Box>
    </ChakraProvider>
  );
};

export default Main;
