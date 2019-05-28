import { fromJS } from 'immutable';
import {
  GET_CONTINENTS,
  GET_CONTINENTS_SUCCESS,
  GET_CONTINENTS_ERROR,
} from './constants';

export const initialState = fromJS({
  loadingContinents: false,
  continents: [],
  loadingContinentsError: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTINENTS:
      return state.set('loadingContinents', true);
    case GET_CONTINENTS_ERROR:
      return state
        .set('loadingContinents', false)
        .set('loadingContinentsError', action.payload.error);
    case GET_CONTINENTS_SUCCESS:
      return state
        .set('loadingContinents', false)
        .set('continents', fromJS(action.payload.continents));
    default:
      return state;
  }
}

export default homePageReducer;
