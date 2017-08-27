/* eslint-disable no-constant-condition */

const HOST = 'http://localhost:3000/api/v1'

import { take, put, call, fork, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from '../actions'


export function getAllDeps() {
    return fetch(HOST + "/departments", {method: "GET"})
            .then(response => response.json());

}
export function getAllUsers(departmentId) {
    let link = HOST + "/departments/"+departmentId + "/users";
  return fetch(link, {
              method: "GET"
          }).then(response => response.json());

}

export function* fetchDepsInfo() {
  const deps = yield call(getAllDeps)
  yield put(actions.getAllDeps(deps))
}

export function* fetchAllUsers(departmentId) {
    departmentId = departmentId || 1
    const deps = yield call(getAllUsers, departmentId)
    yield put(actions.getAllUsers(deps))
}


export function* nextDepData() {
  while(true) {
      //const depId = yield select(selectDepId)
      const action = yield take(actions.GET_DEP_USERS)

      const deps = yield call(getAllUsers, action.depId)
      yield put(actions.getAllUsers(deps))
  }
}


export default function* root() {
    yield fork(fetchDepsInfo)
    yield fork(nextDepData)
    yield fork(fetchAllUsers)

}
