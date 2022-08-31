import React from 'react';
import { useSelector } from 'react-redux';
import SityItem from '../sityItem/SityItem';
import './sitiesList.scss';

export default function SitiesList() {
  const { citiesList } = useSelector((state) => state.searchSliceReducer);
  return (
    <div className="sitiesList">
      <ul>
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
