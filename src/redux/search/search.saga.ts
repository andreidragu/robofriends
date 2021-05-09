import { debounce, put } from 'redux-saga/effects';

import { searchFieldTyping, searchFieldChange } from './search.slice';

function* searchFieldTypingWorker (action: ReturnType<typeof searchFieldTyping>) {
  yield put(searchFieldChange(action.payload));
}

export function* searchFieldTypingWatcher () {
  yield debounce(200, searchFieldTyping.type, searchFieldTypingWorker);
}
