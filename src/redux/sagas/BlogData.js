


import { take, put, call, fork } from "redux-saga/effects";
import * as types from "../actions/ActionTypes";
import { success, failure } from "../actions/blogData";
import ApiSauce from '../../services/apiSauce';
import {login_Api} from '../../config/WebServices';

function callRequest(url) {
  return ApiSauce.get(url);
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.BLOG_DATA.REQUEST);
    try {
      const response = yield call(callRequest, payload);
      console.log(response)
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}