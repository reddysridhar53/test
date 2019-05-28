import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  text-align: center;
  height: 8em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  font-weight: 500;
  transition: 250ms height ease-in;
  background: #fff;
  box-shadow: 2px 4px 2px 0px rgba(0, 0, 0, 0.05);
  ${({ sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      height: 6em;
      ${ImageWrapper} {
        max-width: 4em;
      }
    `};
`;

export const ImageWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  max-width: 15em;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const NavCenter = styled.div`
  display: flex;
`;
