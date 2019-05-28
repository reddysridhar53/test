import {
  GET_CONTINENTS,
  GET_CONTINENTS_ERROR,
  GET_CONTINENTS_SUCCESS,
} from './constants';

export function getContinents() {
  return {
    type: GET_CONTINENTS,
  };
}

export function getContinentsSuccess(payload) {
  return {
    type: GET_CONTINENTS_SUCCESS,
    payload,
  };
}

export function getContinentsError(payload) {
  return {
    type: GET_CONTINENTS_ERROR,
    payload,
  };
}
