import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../../features/search/searchSlice';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';
import SitiesList from '../sitiesList/SitiesList';
import Table from '../table/Table';
import fetchSitiesThunkCreator from '../../thunks/fetchSitiesThunk';
import './app.scss';

export default function App() {
  const {
    loading, error, citiesList, inputValue,
  } = useSelector((state) => state.searchSliceReducer);
  const dispatch = useDispatch();

  const loader = loading ? <Loader /> : null;
  const popup = error ? <Popup text={error} /> : '';
  const sitiesList = citiesList.length === 0 ? null : <SitiesList />;
  // const table = citiesTable.length > 0 ? <Table /> : null;

  const handelOnChange = (value) => {
    dispatch(setField({ inputValue: value }));
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
          value={inputValue}
          onChange={(e) => handelOnChange(e.target.value)}
        />
        {sitiesList}
      </div>
      <Table />
    </div>

  );
}
// KIyrDT5b5883Ys48bDljeWMPqty6kkHF
