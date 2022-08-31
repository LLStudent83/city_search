/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { citiesTableDel } from '../../features/search/searchSlice';

export default function DelRow({ row }) {
  const dispatch = useDispatch();

  const handelClick = () => {
    dispatch(citiesTableDel({ nummRow: row.row.id }));
  };

  return (
    <button onClick={handelClick}>Удалить строку</button>
  );
}

DelRow.propTypes = {
  row: PropTypes.object.isRequired,
};
