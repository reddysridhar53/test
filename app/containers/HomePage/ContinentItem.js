import React from 'react';
import PropTypes from 'prop-types';
import { ContinentCard, ContinentTitle, ContinentItem } from './styledElements';

function PostItemDetails({ title, onContinentClick, continentId }) {
  const handleContinentClick = () => {
    onContinentClick(continentId);
  };

  return (
    <ContinentCard onClick={handleContinentClick}>
      <ContinentItem to={`/continents/${continentId}`}>
        <ContinentTitle>{title}</ContinentTitle>
      </ContinentItem>
    </ContinentCard>
  );
}

PostItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  continentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onContinentClick: PropTypes.func.isRequired,
};

export default PostItemDetails;
