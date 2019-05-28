import styled from 'styled-components';

export const PostPageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const H = styled.h1`
  font-size: 2.4em;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  text-transform: capitalize;
`;
export const CountryItemWrapper = styled.div`
  background: #fff;
  padding: 1em;
  flex: 0 32%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1%;
  margin-right: 1%;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.01);
  @media only screen and (max-width: 964px) and (min-width: 424px) {
    flex: 0 48%;
  }
  @media only screen and (max-width: 424px) {
    flex: 0 100%;
    margin-right: 0%;
  }
`;
export const ContinentCountriesWrapper = styled.div`
  width: 100%;
  max-width: 964px;
  margin: 0 auto;
  @media screen and (max-width: 964px) {
    padding: 10px;
  }
`;
export const CountryTable = styled.table`
  boder
`;
export const CountryTr = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const CountryTd = styled.td`
  font-size: 1.2em;
  padding: 5px 10px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:first-child {
    color: rgba(0, 0, 0, 0.75);
  }
`;
export const ContinentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const CountriesContent = styled.div`
  font-size: 1.4em;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const PostItem = styled.div`
  background: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.01);
`;

export const PostTitle = styled.h2`
  font-size: 2em;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
  margin-bottom: 0.5em;
  @media screen and (max-width: 964px) {
    font-size: 1.5em;
  }
`;

export const PostBody = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
  text-transform: capitalize;
  @media screen and (max-width: 964px) {
    font-size: 1.2em;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  flex: 1;
  font-size: 2em;
  margin: 1em 0 0.5em;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  text-transform: capitalize;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
