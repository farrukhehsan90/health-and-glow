


import { take, put, call, fork } from "redux-saga/effects";
import * as types from "../actions/ActionTypes";
import { success, failure } from "../actions/blogData";
function callRequest(data) {
  // const token = JSON.parse(localStorage.getItem('tempdata')).access_token;
  return true
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.BLOG_DATA.REQUEST);
    try {
      const response = yield call(callRequest, payload);
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}