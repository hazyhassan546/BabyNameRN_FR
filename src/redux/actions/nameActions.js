import { createAction } from "redux-actions";
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

export const nameActionCreator = {
  getNames: createAction(GET_NAMES),
  getNamesSuccess: createAction(GET_NAMES_SUCCESS),
  getNamesError: createAction(GET_NAMES_ERROR),
  getTrendingNames: createAction(GET_TRENDING_NAMES),
  getTrendingNamesSuccess: createAction(GET_TRENDING_NAMES_SUCCESS),
  getTrendingNamesError: createAction(GET_TRENDING_NAMES_ERROR),

  ////

  setKeyword: createAction(SET_KEYWORD),
  clearKeyword: createAction(CLEAR_KEYWORD),
  setGender: createAction(SET_GENDER),
  clearGender: createAction(CLEAR_GENDER),
  setReligion: createAction(SET_RELIGION),
  clearReligion: createAction(CLEAR_RELIGION),
};
