import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: rgb(162, 103, 214);
  display: flex;
  font-size: 1.5em;
  margin: 1em 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: rgb(83, 77, 253);
  }
`;
