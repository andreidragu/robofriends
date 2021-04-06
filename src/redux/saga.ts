import { fork } from 'redux-saga/effects';

import { fetchRobotsWatcher } from './robots/robots.saga';

export default function* rootSaga () {
    yield fork(fetchRobotsWatcher);
}
