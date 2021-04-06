import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ERobotsActionType, IRobot } from './robots.type';
import type { RootState } from '../store';

// Define a type for the slice state
interface IRobotsState {
    robots: IRobot[];
    isFetching: boolean;
    errorMessage: string;
}

// Define the initial state using that type
const initialState: IRobotsState = {
    robots: [],
    isFetching: true,
    errorMessage: ''
};

export const fetchRobotsStart = createAction<void, ERobotsActionType>(ERobotsActionType.FETCH_ROBOTS_START);

export const fetchRobotsSuccess = createAction<IRobot[], ERobotsActionType>(ERobotsActionType.FETCH_ROBOTS_SUCCESS);

export const fetchRobotsFailure = createAction<string, ERobotsActionType>(ERobotsActionType.FETCH_ROBOTS_FAILURE);

export const robotsSlice = createSlice({
    name: 'robots',
    // `robotsSlice` will infer the state type from the `initialState` argument
    initialState,
    // reducers: {
    //     fetchRobotsStart: state => {
    //         // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //         // doesn't actually mutate the state because it uses the Immer library,
    //         // which detects changes to a "draft state" and produces a brand new
    //         // immutable state based off those changes
    //         state.isFetching = true;
    //     },
    //     fetchRobotsSuccess: (state, action: PayloadAction<IRobot[]>) => {
    //         state.isFetching = false;
    //         state.robots = action.payload;
    //     },
    //     fetchRobotsFailure: (state, action: PayloadAction<string>) => {
    //         state.isFetching = false;
    //         state.errorMessage = action.payload;
    //     }
    // },
    reducers: {},
    // "builder callback API", recommended for TypeScript users
    extraReducers: builder => {
        builder.addCase(fetchRobotsStart, state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isFetching = true;
        });
        builder.addCase(fetchRobotsSuccess, (state, action: PayloadAction<IRobot[]>) => {
            state.isFetching = false;
            state.robots = action.payload;
        });
        builder.addCase(fetchRobotsFailure, (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.errorMessage = action.payload;
        });
    }
});

// export reducers actions to be used in saga
// export const { fetchRobotsStart, fetchRobotsSuccess, fetchRobotsFailure } = robotsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.robots.robots)`
export const selectRobots = (state: RootState) => state.robotsState.robots;

export default robotsSlice.reducer;
