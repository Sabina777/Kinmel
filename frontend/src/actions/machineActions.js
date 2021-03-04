import {
  MACHINE_LIST_REQUEST,
  MACHINE_LIST_SUCCESS,
  MACHINE_LIST_FAIL,
} from "../constants/machineConstants";

import axios from "axios";

//to get or list out all the available products
export const listMachines = () => async (dispatch) => {
  try {
    dispatch({ type: MACHINE_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:3012/api/machines");
    const machines = data.data;

    dispatch({ type: MACHINE_LIST_SUCCESS, payload: machines });
  } catch (error) {
    dispatch({
      type: MACHINE_LIST_FAIL,
      payload: error.message,
    });
  }
};
