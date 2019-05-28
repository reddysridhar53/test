import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getContinents as getContinentsApi } from '../../helpers/apis';
import { GET_CONTINENTS } from './constants';
import { getContinentsSuccess, getContinentsError } from './actions';

export function* getContinents() {
  try {
    const { data } = yield call(getContinentsApi);
    yield put(getContinentsSuccess(data));
  } catch (err) {
    yield put(getContinentsError(err));
  }
}

export default function* homePageSaga() {
  yield all([takeLatest(GET_CONTINENTS, getContinents)]);
}
