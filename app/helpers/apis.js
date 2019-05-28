import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import * as config from '../config';

let client;

const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

const getContinentByCodeQuery = code => gql`
  {
    continent(code: "${code}") {
      name
      code
      countries {
        name
        native
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  }
`;

const getApolloClient = () => {
  if (client) {
    return client;
  }
  client = new ApolloClient({ uri: config.API_URL });
  return client;
};

export function getContinents() {
  const apolloClient = getApolloClient();

  return apolloClient.query({
    query: GET_CONTINENTS,
  });
}

export function getContinentByCode(continentCode) {
  const GET_CONTINENT_BY_CODE = getContinentByCodeQuery(continentCode);

  const apolloClient = getApolloClient();

  return apolloClient.query({
    query: GET_CONTINENT_BY_CODE,
  });
}
