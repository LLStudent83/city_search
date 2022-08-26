import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../features/search/searchSlice';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';
import fetchSitiesThunkCreator from '../../thunks/fetchSitiesThunk';
import './app.scss';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.searchSliceReducer);

  const loader = loading ? <Loader /> : null;
  const popup = error ? <Popup text={error} /> : '';

  const handelOnChange = (value) => {
    setSearchQuery(value);
    dispatch(fetchSitiesThunkCreator(value));
  };

  return (
    <div className="container">
      {loader}
      {popup}
      <div>Начните вводить название города</div>
      <div>
        <input
        type="text"
        className="serchString"
        value={searchQuery}
        onChange={(e) => handelOnChange(e.target.value)}
        />
        
    </div>
      
    </div>

  );
}
// KIyrDT5b5883Ys48bDljeWMPqty6kkHF
