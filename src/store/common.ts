import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  searchKey: string;
}

const commonSlice = createSlice({
  name: "game",
  initialState: {
    searchKey: "",
  } as CommonState,
  reducers: {
    setSearchKey(state, action: PayloadAction<string>) {
      state.searchKey = action.payload;
    },
  },
});

const { actions, reducer } = commonSlice;

export const { setSearchKey } = actions;

export const selectSearchKey = (state: ApplicationState) =>
  state.common.searchKey;

export default reducer;
