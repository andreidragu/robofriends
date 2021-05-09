import type React from 'react';
import { memo as ReactMemo } from 'react';

import { IRobot } from '../redux/robots/robots.type';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';

type TRobotsProps = {
  robots: IRobot[];
};

const BreakException = {};

const Robots: React.FC<TRobotsProps> = ReactMemo(({ robots }) => {
  return (
    <Scroll offsetH={155}>
      <ErrorBoundary>
        <CardList robots={robots} />
      </ErrorBoundary>
    </Scroll>
  );
}, (prevProps, nextProps) => {
  if (nextProps.robots.length !== prevProps.robots.length) return false;

  let propsAreEqual = true;
  try {
    nextProps.robots.forEach((robot, i) => {
      if (robot.id !== prevProps.robots[i].id) {
        propsAreEqual = false;
        throw BreakException;
      }
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }
  return propsAreEqual;
});
Robots.displayName = 'Robots';

export default Robots;
