import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOuterClick } from 'react-outer-click';
import { setField } from '../../features/search/searchSlice';
import SityItem from '../sityItem/SityItem';

import './sitiesList.scss';

export default function SitiesList() {
  const dispatch = useDispatch();
  const elListSitis = useRef(null);
  const { citiesList } = useSelector((state) => state.searchSliceReducer);
  useOuterClick(elListSitis, (event) => {
    event.preventDefault();
    dispatch(setField({ cities: {}, citiesList: [], inputValue: '' }));
  });

  return (
    <div className="sitiesList">
      <ul ref={elListSitis}>
        {
          citiesList.map((obj) => (
            <SityItem
              key={obj.oktmo}
              id={obj.oktmo}
              sityFullName={obj.name_display}
            />
          ))
        }

      </ul>
    </div>
  );
}
