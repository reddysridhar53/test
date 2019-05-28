import { createSelector } from 'reselect';
import { initialState } from './reducer';

const PostPageInitialState = state => state.get('continentPage', initialState);

const selectLoadingContinent = () =>
  createSelector(PostPageInitialState, nextState =>
    nextState.get('loadingContinent'),
  );

const selectGetContinent = () =>
  createSelector(PostPageInitialState, nextState =>
    nextState.get('continent').toJS(),
  );

export { selectLoadingContinent, selectGetContinent };
