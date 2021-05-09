import { createAction, createSlice } from '@reduxjs/toolkit';

import { ESearchActionType } from './search.type';

// Define a type for the slice state
interface ISearchState {
  searchField: string;
}

// Define the initial state using that type
const initialState: ISearchState = {
  searchField: ''
};

export const searchFieldTyping = createAction<string, ESearchActionType>(ESearchActionType.SEARCH_FIELD_TYPING);

export const searchFieldChange = createAction<string, ESearchActionType>(ESearchActionType.SEARCH_FIELD_CHANGE);

export const searchSlice = createSlice({
  name: 'search',
  // `searchSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchFieldChange, (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.searchField = action.payload;
    });
  }
});

export default searchSlice.reducer;
