import type React from 'react';

import SearchBox from './SearchBox';
import Robots from './Robots';
import Heading from './Heading';

import { useAppSelector } from '../redux/hooks';
import { useRobots } from '../redux/robots/robots.slice';

const ContentBody: React.FC = () => {
  const robots = useRobots();
  const searchField = useAppSelector(state => state.searchState.searchField);

  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <>
      <SearchBox />
      {filteredRobots.length
        ? <Robots robots={filteredRobots} />
        : <Heading size="l">No robots found :(</Heading>
      }
    </>
  );
};
ContentBody.displayName = 'ContentBody';

export default ContentBody;
