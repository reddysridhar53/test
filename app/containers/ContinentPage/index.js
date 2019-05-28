import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { selectGetContinent, selectLoadingContinent } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getContinentByCode } from './actions';

import BackButton from '../../components/BackButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import CountryItem from './CountryItem';
import {
  H,
  PageTitle,
  PostPageWrapper,
  ContinentCountriesWrapper,
  ContinentContainer,
  CountriesContent,
  PageTitleWrapper,
} from './styledElements';

export class PostPage extends Component {
  componentDidMount() {
    const { continentCode } = this.props.match.params;

    this.props.onGetContinent(continentCode);
  }

  renderCountries = () => {
    const { continent, loadingContinent } = this.props;

    if (loadingContinent) {
      return <LoadingIndicator />;
    }
    if (!Object.keys(continent).length) {
      return <H>No Continent Found.</H>;
    }

    const { countries } = continent;

    return countries.map(country => (
      <CountryItem key={country.code} country={country} />
    ));
  };

  render() {
    const { loadingContinent, continent } = this.props;

    return (
      <PostPageWrapper>
        <Helmet>
          <title>AasanJobs Continent Detail Page - Frontend Task</title>
          <meta name="description" content="Continent Detail Page" />
        </Helmet>
        {loadingContinent ? (
          <LoadingIndicator />
        ) : (
          <ContinentCountriesWrapper>
            <BackButton to="/">Go to Continents</BackButton>
            <ContinentContainer>
              <PageTitleWrapper>
                <PageTitle>{`Continent - ${continent.name}`}</PageTitle>
              </PageTitleWrapper>
              <CountriesContent>{this.renderCountries()}</CountriesContent>
            </ContinentContainer>
          </ContinentCountriesWrapper>
        )}
      </PostPageWrapper>
    );
  }
}

PostPage.propTypes = {
  onGetContinent: PropTypes.func.isRequired,
  loadingContinent: PropTypes.bool.isRequired,
  continent: PropTypes.object,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  continent: selectGetContinent(),
  loadingContinent: selectLoadingContinent(),
});

const mapDispatchToProps = dispatch => ({
  onGetContinent: code => dispatch(getContinentByCode(code)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'continentPage', reducer });
const withSaga = injectSaga({ key: 'continentPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostPage);
