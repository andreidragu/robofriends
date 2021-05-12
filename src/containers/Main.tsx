import type React from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';

import Fonts from '../components/Fonts';
import Loading from '../components/Loading';
import Heading from './Heading';

import { useAppDispatch } from '../redux/hooks';
import { useRobotsSelector, fetchRobotsStart } from '../redux/robots/robots.slice';

const ContentBody = lazy(() => import('./ContentBody'));

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
  const { isLoading, errorMessage } = useRobotsSelector(({ isFetching, errorMessage }) => ({ isLoading: isFetching, errorMessage }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRobotsStart());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box textAlign="center">
        <Heading size="2xl" fontFamily="SEGA LOGO FONT" fontWeight={200}>RoboFriends</Heading>
        {isLoading
          ? <Loading />
          : errorMessage
            ? <Heading>{errorMessage}</Heading>
            : <Suspense fallback={<Loading />}><ContentBody /></Suspense>
        }
      </Box>
    </ChakraProvider>
  );
};

export default Main;
