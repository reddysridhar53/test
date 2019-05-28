import {
  GET_CONTINENT_BY_CODE,
  GET_CONTINENT_BY_CODE_SUCCESS,
  GET_CONTINENT_BY_CODE_ERROR,
} from './constants';

export function getContinentByCode(payload) {
  return {
    type: GET_CONTINENT_BY_CODE,
    payload,
  };
}

export function getContinentByCodeSuccess(payload) {
  return {
    type: GET_CONTINENT_BY_CODE_SUCCESS,
    payload,
  };
}

export function getContinentByCodeError(payload) {
  return {
    type: GET_CONTINENT_BY_CODE_ERROR,
    payload,
  };
}
