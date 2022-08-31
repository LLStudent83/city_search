import { citiesTableAdd, setField } from '../features/search/searchSlice';
import getCityById from '../scripts/getCityById';

export default function addSityInTableSitiesThunkCreator(id) {
  return async function fetchSitiesThunk(dispatch, getState) {
    const { searchSliceReducer } = getState();
    dispatch(citiesTableAdd({ cityObj: getCityById(searchSliceReducer.cities, id) }));
    dispatch(setField({ cities: {}, citiesList: [], inputValue: '' }));
  };
}
