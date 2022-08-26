import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import addSityInTableSitiesThunkCreator from '../../thunks/addSityInTableSitiesThunk';

export default function SityItem({ sityFullName, id }) {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(addSityInTableSitiesThunkCreator(id));
  };
  return (
    <li className="sityItem">
      <button onClick={() => handlerClick(id)}>
        {sityFullName}
      </button>
    </li>
  );
}

SityItem.propTypes = {
  sityFullName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
