import {
  CLEAR_GENDER,
  CLEAR_KEYWORD,
  CLEAR_RELIGION,
  GET_NAMES,
  GET_NAMES_ERROR,
  GET_NAMES_SUCCESS,
  GET_TRENDING_NAMES,
  GET_TRENDING_NAMES_ERROR,
  GET_TRENDING_NAMES_SUCCESS,
  SET_GENDER,
  SET_KEYWORD,
  SET_RELIGION,
} from "../types/types";

const defaultState = {
  namesList: [],
  trendingNamesList: [],
  getNameSuccess: false,
  getNameError: false,
  error: "",
  gender: "male",
  genderIndex: 0,
  religion: "",
  keyword: "",
};
export default function nameReducer(state = defaultState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case GET_NAMES:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: "",
      };
    case GET_NAMES_SUCCESS:
      return {
        ...state,
        loading: true,
        getNameSuccess: true,
        getNameError: false,
        error: "",
        namesList: payload,
      };
    case GET_NAMES_ERROR:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };
    case GET_TRENDING_NAMES:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: "",
      };
    case GET_TRENDING_NAMES_SUCCESS:
      return {
        ...state,
        loading: true,
        getNameSuccess: true,
        getNameError: false,
        error: "",
        trendingNamesList: payload,
      };
    case GET_TRENDING_NAMES_ERROR:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: payload.value,
        genderIndex: payload.id,
      };
    case CLEAR_GENDER:
      return {
        ...state,
        gender: "", // incase of both option
      };
    case SET_RELIGION:
      return {
        ...state,
        religion: payload,
      };
    case CLEAR_RELIGION:
      return {
        ...state,
        religion: "",
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: payload,
      };
    case CLEAR_KEYWORD:
      return {
        ...state,
        keyword: "",
      };
    default:
      return state;
  }
}
