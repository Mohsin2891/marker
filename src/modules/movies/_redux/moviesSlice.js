import { createSlice } from "@reduxjs/toolkit";

const initialmoviesManagementState = {
  page: null,
  limit: null,
  totalPages: null,
  listLoading: false,
  totalResults: null,
  actionLoading: false,
  questionnaires: [],
  allQuestionnaire: null,
  selectedQuestionnaire: null,
};

export const questionnaireManagementSlice = createSlice({
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
  },
});
