import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './sityItem.scss';
import addSityInTableSitiesThunkCreator from '../../thunks/addSityInTableSitiesThunk';

export default function SityItem({ sityFullName, id }) {
  // const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  function handlerClick(id) {
    dispatch(addSityInTableSitiesThunkCreator(id));
  }
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
  id: PropTypes.number.isRequired,
};
