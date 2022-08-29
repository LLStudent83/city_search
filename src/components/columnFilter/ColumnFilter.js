import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnFilter({ column }) {
  console.log('Вызвался ColumnFilter');
  const { filterValue, setFilter } = column;
  return (
    <span>

      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

ColumnFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
};
