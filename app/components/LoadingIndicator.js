import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 0.8em solid #01b8c5;
  border-radius: 50%;
  border-top: 0.8em solid rgb(83, 77, 253);
  width: 6em;
  height: 6em;
  animation: ${rotate} 2s linear infinite;
  ${({ mini }) =>
    mini &&
    css`
      width: 4em;
      height: 4em;
      border: 0.6em solid #01b8c5;
      border-top: 0.6em solid rgb(83, 77, 253);
    `};
`;

const LoadingWrapper = styled.div`
  width: 100%;
  min-height: 30em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoadingIndicator({ mini }) {
  return (
    <LoadingWrapper>
      <Loader mini={mini} />
    </LoadingWrapper>
  );
}

LoadingIndicator.propTypes = {
  mini: PropTypes.bool,
};

export default LoadingIndicator;
