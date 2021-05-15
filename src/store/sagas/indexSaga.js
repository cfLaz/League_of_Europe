import { takeEvery, all } from 'redux-saga/effects';

import {auth, logOutSaga, authCheckStateSaga, checkAuthTimeoutSaga} from './AuthSaga';
import {newLeague, updateBackAndFront, getLeagues, deleteLeague} from './updateBackAndFront';

export function* watchUpdates() {
  yield all([
    takeEvery('UPDATE_STATS', updateBackAndFront),
    takeEvery('GET_LEAGUES', getLeagues),
    takeEvery('NEW_LEAGUE_SUBMITTED', getLeagues),
    takeEvery('START_NEW_LEAGUE', newLeague),
    takeEvery('DELETE_LEAGUE', deleteLeague)
  ])



}

export function* watchAuth() {
  yield all([
    takeEvery('LOGGED_OUT', logOutSaga),
    takeEvery('AUTH_CHECK_TIMEOUT', checkAuthTimeoutSaga),
    takeEvery('AUTH_ATTEMPT', auth),
    takeEvery('AUTH_CHECK_STATE', authCheckStateSaga),

  ])

}