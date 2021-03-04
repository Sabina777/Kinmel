import {
  MACHINE_LIST_REQUEST,
  MACHINE_LIST_SUCCESS,
  MACHINE_LIST_FAIL,
} from "../constants/machineConstants";

//reducer for getting all products
export const machineListReducers = (state = { machines: [] }, action) => {
  switch (action.type) {
    case MACHINE_LIST_REQUEST:
      return {
        loading: true,
        machines: [],
      };

    case MACHINE_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        machines: action.payload,
      };

    case MACHINE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
