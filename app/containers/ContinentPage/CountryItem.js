import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  CountryItemWrapper,
  CountryTable,
  CountryTr,
  CountryTd,
} from './styledElements';

function CountryItem({ country }) {
  const countryProps = Object.keys(country);
  const filterId = arr => arr.filter(val => val !== '__typename');
  const memoizedCountryPorps = useMemo(() => filterId(countryProps), [1]);

  return (
    <CountryItemWrapper>
      <CountryTable>
        {memoizedCountryPorps.map(prop => {
          const value = country[prop] || '-';
          return (
            <CountryTr key={prop}>
              <CountryTd main>{prop}</CountryTd>
              <CountryTd>
                {prop !== 'languages'
                  ? value
                  : value.map((elm, i) => (
                    <span key={elm.name}>{`${elm.name}${
                      i !== value.length - 1 ? ', ' : ''
                    }`}</span>
                  ))}
              </CountryTd>
            </CountryTr>
          );
        })}
      </CountryTable>
    </CountryItemWrapper>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
