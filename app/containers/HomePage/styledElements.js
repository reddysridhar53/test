/*
    Styles Components to Design Home Page Components and Sections.
*/

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 964px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContinentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
`;

export const ContinentsContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContinentCard = styled.div`
  width: 33.3%;
  padding: 1em;
  display: flex;
  flex: 0 33.3%;
  &:nth-child(3n + 1) {
    padding-left: 0;
  }
  @media only screen and (max-width: 964px) and (min-width: 424px) {
    width: 50%;
    flex: 1 0 50%;
  }
  @media only screen and (max-width: 424px) {
    width: 100%;
    padding: 1em 0;
    flex: 1 0 100%;
  }
`;

export const ContinentItem = styled.div`
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  transition: 250ms all ease-in;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 4px 8px 8px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;

export const ContinentTitle = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
  font-size: 2em;
  text-align: center;
  line-height: 1.2;
  margin: 0.5em;
  text-decoration: none;
  transition: 250ms all ease-in;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const PostActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostComment = styled.div`
  font-size: 1.4em;
  color: rgba(0, 0, 0, 0.6);
`;

export const PostUserName = styled(Link)`
  color: rgb(83, 77, 253);
  font-weight: 500;
  font-size: 1.6em;
  transition: 250ms all ease-in;
  text-decoration: none;
  &:hover {
    color: rgb(162, 103, 214);
  }
`;

export const UserLink = styled(Link)`
  padding: 1em;
  display: flex;
  align-items: left;
  cursor: pointer;
  font-size: 1.8em;
  text-trasnform: capitalize;
  color: rgb(162, 103, 214);
  &:hover {
    color: rgb(83, 77, 253);
    background: #f5f5f5;
  }
`;

export const SearchComponentWrapper = styled.div`
  display: flex;
  padding: 2em 1em 0;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchTypeHeader = styled.div`
  font-size: 2em;
  color: rgba(0, 0, 0, 0.75);
  margin-right: 2em;
`;

export const SearchComponent = styled.div`
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.6);
  transition: 250ms all ease-in;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  ${({ active }) =>
    active &&
    css`
      color: rgba(0, 0, 0, 1);
      border-bottom: 2px solid #009688;
    `};
`;
