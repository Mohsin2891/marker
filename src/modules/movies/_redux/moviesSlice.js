import { createSlice } from "@reduxjs/toolkit";

const initialmoviesManagementState = {
  page: null,
  limit: null,
  totalPages: null,
  listLoading: false,
  totalResults: null,
  actionLoading: false,
  selectedMovie: null,
  allMovies: [],
  persons: [],
};

export const moviesSlice = createSlice({
  name: "moviesManagementSlice",
  initialState: initialmoviesManagementState,
  reducers: {
    startCall: (state, action) => {
      if (action.payload === "action") {
        state.actionLoading = true;
      } else {
        state.listLoading = true;
      }
    },
    stopCall: (state, action) => {
      if (action.payload === "action") {
        state.actionLoading = false;
      } else {
        state.listLoading = false;
      }
    },
    selectedMovie: (state, action) => {
      state.selectedMovie = action.payload?.data;
    },
    setAllMovies: (state, action) => {
      const { page, results, total_results, total_pages } = action.payload;
      state.allMovies = results;
      state.page = page;
      state.totalPages = total_pages;
      state.totalResults = total_results;
    },

    setPerson: (state, action) => {
      const { page, results, total_results, total_pages } = action.payload;

      state.persons = results;
      state.page = page;
      state.totalPages = total_pages;
      state.totalResults = total_results;
    },
  },
});
