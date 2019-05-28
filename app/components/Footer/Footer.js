import styled, { css } from 'styled-components';

export default styled.footer`
  text-align: center;
  font-size: 1.5em;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.9);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${({ theme }) =>
    theme &&
    css`
      color: rgba(255, 255, 255, 0.9);
      background-color: #000;
    `};
`;
