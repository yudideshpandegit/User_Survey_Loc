import { SURVEY_CREATE_FAIL, SURVEY_CREATE_FAIL_PAGE2, SURVEY_CREATE_REQUEST, SURVEY_CREATE_REQUEST_PAGE2, SURVEY_CREATE_RESET, SURVEY_CREATE_RESET_PAGE2, SURVEY_CREATE_SUCCESS, SURVEY_CREATE_SUCCESS_PAGE2 } from "../global-state-constants";
import { IstateInterface, IstateInterfacepPage2 } from "../../interfaces/interfaces";

export const surveyActionPage1 = (data:IstateInterface) => async (dispatch:any) => {
    try {
      dispatch({ type: SURVEY_CREATE_REQUEST });

      console.log("Was here", data);
  
      dispatch({ type: SURVEY_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SURVEY_CREATE_FAIL,
      });
    }
  };

  
export const surveyActionPage2 = (data:IstateInterfacepPage2) => async (dispatch:any) => {
  try {
    dispatch({ type: SURVEY_CREATE_REQUEST_PAGE2 });

    console.log("Was here", data);

    dispatch({ type: SURVEY_CREATE_SUCCESS_PAGE2, payload: data });
  } catch (error) {
    dispatch({
      type: SURVEY_CREATE_FAIL_PAGE2,
    });
  }
};

export const reset = () => async (dispatch:any) => {
  try {
    dispatch({ type: SURVEY_CREATE_RESET });
    dispatch({ type: SURVEY_CREATE_RESET_PAGE2 });
  } catch (error) {
    console.log(error);
  }
};
  