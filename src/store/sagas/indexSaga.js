import { takeEvery, all } from 'redux-saga/effects';

import {auth, logOutSaga, authCheckStateSaga, checkAuthTimeoutSaga} from './AuthSaga';
import {updateBackAndFront} from './updateBackAndFront';

export function* watchMatchWeek() {
  yield takeEvery('UPDATE_STATS', updateBackAndFront)

}

export function* watchAuth() {
  yield all([
    takeEvery('LOGGED_OUT', logOutSaga),
    takeEvery('AUTH_CHECK_TIMEOUT', checkAuthTimeoutSaga),
    takeEvery('AUTH_ATTEMPT', auth),
    takeEvery('AUTH_CHECK_STATE', authCheckStateSaga),

  ])

}