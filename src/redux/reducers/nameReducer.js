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
  SET_ALPHABET,
  SET_LOADING,
  GET_RELATED_NAMES,
  GET_RELATED_NAMES_ERROR,
  CLEAR_RELATED_NAMES,
  GET_RELATED_NAMES_SUCCESS,
  SET_DETAIL_ITEM,
} from "../types/types";

const defaultState = {
  namesList: [],
  trendingNamesList: [],
  relatedNamesList: [],
  detailItem: {},
  getNameSuccess: false,
  getNameError: false,
  error: "",
  gender: "male",
  genderIndex: 0,
  religion: "",
  keyword: "",
  alphabet: "",
  loading: false,
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
        loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: "",
        namesList: payload,
      };
    case GET_NAMES_ERROR:
      return {
        ...state,
        loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };

    case GET_RELATED_NAMES:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: "",
      };
    case GET_RELATED_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: "",
        relatedNamesList: payload,
      };
    case GET_RELATED_NAMES_ERROR:
      return {
        ...state,
        loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
        relatedNamesList: [],
      };
    case CLEAR_RELATED_NAMES:
      return {
        ...state,
        relatedNamesList: [],
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
        loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: "",
        trendingNamesList: payload,
      };
    case GET_TRENDING_NAMES_ERROR:
      return {
        ...state,
        loading: false,
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
    case SET_ALPHABET:
      return {
        ...state,
        alphabet: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_DETAIL_ITEM:
      return {
        ...state,
        detailItem: payload,
      };
    default:
      return state;
  }
}
