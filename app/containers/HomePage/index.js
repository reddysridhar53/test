import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { selectContinents, selectLoadingContinents } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getContinents } from './actions';

import LoadingIndicator from '../../components/LoadingIndicator';
import ContinentItem from './ContinentItem';
import {
  PageTitle,
  HomePageWrapper,
  ContinentsContainer,
  ContinentsContent,
} from './styledElements';

export class HomePage extends PureComponent {
  componentDidMount() {
    this.props.onGetContinents();
  }

  handleContinentClick = continentCode => {
    const { history } = this.props;

    history.push(`/continents/${continentCode}`);
  };

  renderContinents = () => {
    const { continents, loadingContinents } = this.props;

    if (loadingContinents) {
      return <LoadingIndicator />;
    }
    return continents.map(continent => {
      const { code: continentId, name } = continent;

      return (
        <ContinentItem
          key={continentId}
          title={name}
          continentId={continentId}
          onContinentClick={this.handleContinentClick}
        />
      );
    });
  };

  render() {
    return (
      <HomePageWrapper>
        <Helmet>
          <title>AasaanJobs Home Page - Continents(Frontend Task)</title>
          <meta name="description" content="Sample Continents List" />
        </Helmet>
        <ContinentsContainer>
          <PageTitle>Continents</PageTitle>
          <ContinentsContent>{this.renderContinents()}</ContinentsContent>
        </ContinentsContainer>
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  onGetContinents: PropTypes.func.isRequired,
  loadingContinents: PropTypes.bool.isRequired,
  continents: PropTypes.array,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  continents: selectContinents(),
  loadingContinents: selectLoadingContinents(),
});

const mapDispatchToProps = dispatch => ({
  onGetContinents: () => dispatch(getContinents()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
