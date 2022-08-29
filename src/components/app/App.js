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
      <div className="wrat_tytle">
        <h1>Найди города</h1>
      </div>

      <div className="input_blok">
        <label htmlFor="sity">
          Начните вводить название города
          <input
            id="sity"
            placeholder="нарпимер Хабаровск"
            type="text"
            className="serchString"
            value={inputValue}
            onChange={(e) => handelOnChange(e.target.value)}
          />
        </label>
        {sitiesList}
      </div>
      <Table />
    </div>

  );
}
