import { combineReducers } from '@reduxjs/toolkit';

import robotsReducer from './robots/robots.slice';
import searchReducer from './search/search.slice';

const rootReducer = combineReducers({
    robotsState: robotsReducer,
    searchState: searchReducer
});

export default rootReducer;
