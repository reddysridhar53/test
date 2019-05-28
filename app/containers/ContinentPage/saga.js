import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getContinentByCode as getContinentByCodeApi } from '../../helpers/apis';
import { GET_CONTINENT_BY_CODE } from './constants';
import { getContinentByCodeSuccess, getContinentByCodeError } from './actions';

export function* getContinentByCode({ payload: continentCode }) {
  try {
    const { data } = yield call(getContinentByCodeApi, continentCode);
    yield put(getContinentByCodeSuccess(data));
  } catch (err) {
    yield put(getContinentByCodeError(err));
  }
}

export default function* continentPageSaga() {
  yield all([takeLatest(GET_CONTINENT_BY_CODE, getContinentByCode)]);
}
