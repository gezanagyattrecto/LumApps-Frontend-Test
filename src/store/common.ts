import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import qs from "query-string";

const getSavedSearchKey = (key: string) => {
  const search = qs.parse(window.location.search);
  return search[key] || "";
};

export interface CommonState {
  searchKey: string;
  page: number;
}

const commonSlice = createSlice({
  name: "game",
  initialState: {
    searchKey: getSavedSearchKey("searchKey"),
    page: Number(getSavedSearchKey("page") || 0),
  } as CommonState,
  reducers: {
    setSearchKey(state, action: PayloadAction<string>) {
      state.page = 0;
      state.searchKey = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

const { actions, reducer } = commonSlice;

export const { setSearchKey, setPage } = actions;

export const selectSearchKey = (state: ApplicationState) =>
  state.common.searchKey;

export const selectPage = (state: ApplicationState) => state.common.page;

export default reducer;
