import { SURVEY_CREATE_FAIL, SURVEY_CREATE_FAIL_PAGE2, SURVEY_CREATE_REQUEST, SURVEY_CREATE_REQUEST_PAGE2, SURVEY_CREATE_RESET, SURVEY_CREATE_RESET_PAGE2, SURVEY_CREATE_SUCCESS, SURVEY_CREATE_SUCCESS_PAGE2 } from "../global-state-constants";

import { IstateInterface, IstateInterfacepPage2 } from '../../interfaces/interfaces';

export const surveyReducerPage1 = (
    state:{surveyPage1:IstateInterface | null, loading:boolean, error:boolean} = { surveyPage1:{
        name:'',
        email:'',
        country:'',
        age:0,
        gender:''
    }, loading: true, error: false },
    action:any
  ) => {
    switch (action.type) {
      case SURVEY_CREATE_REQUEST:
        {
          return state;
        }
        break;
  
      case SURVEY_CREATE_SUCCESS:
        {

          return {surveyPage1:{
              name: action.payload.name,
              email:action.payload.email,
              country: action.payload.country,
              age: action.payload.age,
              gender: action.payload.gender
          }, loading: false, error: false};
        }
  
      case SURVEY_CREATE_FAIL:
        {
          return { surveyPage1:{
            name:'',
            email:'',
            country:'',
            age:0,
            gender:''
        }, loading: false, error: true };
        }
        break;

        case SURVEY_CREATE_RESET:
          {
            return { surveyPage1:{
              name:'',
              email:'',
              country:'',
              age:0,
              gender:''
          }, loading: false, error: false };
          }
          break;
  
      default:
        return state;
    }
  };


  export const surveyReducerPage2 = (
    state:{surveyPage2:IstateInterfacepPage2 | null, loading:boolean, error:boolean} = { surveyPage2:{
      ques4:'',
      ques5:'',
      ques6:'',
      ques7:'',
      ques8:'',
    }, loading: true, error: false },
    action:any
  ) => {
    switch (action.type) {
      case SURVEY_CREATE_REQUEST_PAGE2:
        {
          return state;
        }
        break;
  
      case SURVEY_CREATE_SUCCESS_PAGE2:
        {

          return {surveyPage2:{
            ques4: action.payload.ques4,
            ques5:action.payload.ques5,
            ques6: action.payload.ques6,
            ques7: action.payload.ques7,
            ques8: action.payload.ques8
          }, loading: false, error: false};
        }
  
      case SURVEY_CREATE_FAIL_PAGE2:
        {
          return { surveyPage2:{
            ques4:'',
            ques5:'',
            ques6:'',
            ques7:'',
            ques8:'',
        }, loading: false, error: true };
        }
        break;

        case SURVEY_CREATE_RESET_PAGE2:
          {
            return { surveyPage2:{
              ques4:'',
              ques5:'',
              ques6:'',
              ques7:'',
              ques8:'',
          }, loading: false, error: false };
          }
          break;
  
      default:
        return state;
    }
  };
  