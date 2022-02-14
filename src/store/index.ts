import { combineReducers, configureStore } from '@reduxjs/toolkit';

import common from './common';

export const rootReducer = combineReducers({
  common,
});


const store = configureStore({
  reducer: rootReducer,
});

export default store;
