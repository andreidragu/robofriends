import { takeLatest, call, put, delay } from 'redux-saga/effects';

import { IRobot } from './robots.type';
import { fetchRobotsStart, fetchRobotsSuccess, fetchRobotsFailure } from './robots.slice';

const doFetchRobots = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
};

function* fetchRobotsWorker () {
  try {
    yield delay(2000);

    if (Math.random() > 0.2) {
      const robots: IRobot[] = yield call(doFetchRobots);
      yield put(fetchRobotsSuccess(robots));
    } else {
      yield put(fetchRobotsFailure('error fetching robots'));
    }
  } catch (error) {
    yield put(fetchRobotsFailure(error.message));
  }
}

export function* fetchRobotsWatcher () {
  yield takeLatest(fetchRobotsStart.type, fetchRobotsWorker);
}
