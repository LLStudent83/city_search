import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Поиск:
      <input
        className="filter_input"
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

ColumnFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
};
