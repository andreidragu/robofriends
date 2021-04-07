import { fork } from 'redux-saga/effects';

import { fetchRobotsWatcher } from './robots/robots.saga';
import { searchFieldTypingWatcher } from './search/search.saga';

export default function* rootSaga () {
    yield fork(fetchRobotsWatcher);
    yield fork(searchFieldTypingWatcher);
}
