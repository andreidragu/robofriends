import { combineReducers } from '@reduxjs/toolkit';

import robotsReducer from './robots/robots.slice';

const rootReducer = combineReducers({
    robotsState: robotsReducer
});

export default rootReducer;
