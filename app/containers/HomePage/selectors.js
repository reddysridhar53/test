/*
  Homepage selectors for posts & users found.
*/

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const HomepageInitialState = state => state.get('homePage', initialState);

const selectContinents = () =>
  createSelector(HomepageInitialState, nextState =>
    nextState.get('continents').toJS(),
  );

const selectLoadingContinents = () =>
  createSelector(HomepageInitialState, nextState =>
    nextState.get('loadingContinents'),
  );

export { selectContinents, selectLoadingContinents };
