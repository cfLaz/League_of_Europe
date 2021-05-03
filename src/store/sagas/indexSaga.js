import { takeEvery } from 'redux-saga/effects';

import {updateBackAndFront} from './updateBackAndFront';

export function* watchMatchWeek() {
  yield takeEvery('UPDATE_STATS', updateBackAndFront)

}