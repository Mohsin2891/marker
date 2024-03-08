import { moviesManagementSlice } from "./moviesManagementSlice";
import * as questionnaireServices from "./questionnaireServices";
const actions = moviesManagementSlice.actions;
export const createQuestionnaire = (onSuccess, onError) => async (dispatch) => {
  try {
    const res = await questionnaireServices.create(formData);
    onSuccess(res);
  } catch (error) {
    onError(error);
  }
};
