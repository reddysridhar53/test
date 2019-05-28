import { fromJS } from 'immutable';
import {
  GET_CONTINENT_BY_CODE,
  GET_CONTINENT_BY_CODE_SUCCESS,
  GET_CONTINENT_BY_CODE_ERROR,
} from './constants';

export const initialState = fromJS({
  loadingContinent: false,
  continent: {},
});

function continentPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTINENT_BY_CODE:
      return state.set('loadingContinent', true);
    case GET_CONTINENT_BY_CODE_ERROR:
      return state.set('loadingContinent', false);
    case GET_CONTINENT_BY_CODE_SUCCESS:
      return state
        .set('loadingContinent', false)
        .set('continent', fromJS(action.payload.continent));
    default:
      return state;
  }
}

export default continentPageReducer;
