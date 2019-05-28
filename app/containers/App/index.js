/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ContinentPage from 'containers/ContinentPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.main`
  margin: 0;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  background: #f5f5f5;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet>
        <meta name="author" content="Dasari Sridhar" />
        <meta
          name="description"
          content="An Application to show sample posts, comments & users."
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/continents/:continentCode"
          component={ContinentPage}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
