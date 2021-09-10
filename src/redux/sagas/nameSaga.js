import { all, take, call, put, fork } from "redux-saga/effects";
import { nameActionCreator } from "../actions/nameActions";
import { getNamesApi, getTrendingNamesApi } from "../Api/apiCalls";
import { GET_NAMES, GET_TRENDING_NAMES } from "../types/types";

function* getNameSaga({ payload }) {
  try {
    const response = yield call(getNamesApi, payload);
    yield put(nameActionCreator.getNamesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getNamesError(err));
  }
}

function* getTrendingNameSaga({ payload }) {
  try {
    const response = yield call(getTrendingNamesApi, payload);
    yield put(nameActionCreator.getTrendingNamesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getTrendingNamesError(err));
  }
}

function* getNamesWatchersSaga() {
  while (true) {
    const action = yield take(GET_NAMES);
    yield* getNameSaga(action);
  }
}

function* getTrendingNameWatchersSaga() {
  while (true) {
    const action = yield take(GET_TRENDING_NAMES);
    yield* getTrendingNameSaga(action);
  }
}

export default function* () {
  yield all([fork(getNamesWatchersSaga), fork(getTrendingNameWatchersSaga)]);
}
