/* eslint-disable max-len */
import { setField } from '../features/search/searchSlice';
import getModifiedArrayOfCities from '../scripts/getModifiedArrayOfCities';

export default function fetchSitiesThunkCreator(searchQuery) {
  return async function fetchSitiesThunk(dispatch) {
    if (!/^[а-яА-ЯЁё]*$/g.test(searchQuery)) {
      dispatch(setField({ error: 'Название города нужно вводить кирилицей' }));
      return;
    }
    dispatch(setField({ error: null }));
    if (searchQuery.length < 3) {
      return;
    }

    dispatch(setField({ loading: true, error: null }));
    try {
      fetch(`https://api.geotree.ru/search.php?term=${searchQuery}`)
        .then((response) => response.json())
        .then((cities) => {
          const madCities = getModifiedArrayOfCities(cities, 'oktmo', 'name_display');
          dispatch(setField({ cities, loading: false, citiesList: madCities }));
        });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
}

// area: 398.477096
// center_level: "1"
// center_of: "65,65701"
// description: "Свердловская область"
// geo_center: {lon: '60.607513', lat: '56.82484'}
// geo_center_inside: true
// geo_inside: {lon: '60.56391', lat: '56.824202'}
// geo_type: "polygon"
// level: "4"
// name_display: "город Екатеринбург"
// name_source: "г Екатеринбург"
// name_type_full: "город"
// name_type_short: "г"
// name_without_type: "Екатеринбург"
// oktmo: "65701000001"
// oktmo_short: "65701000001"
// oktmo_type: "г"
// parent_level: "2"
// parents: {level_1: {…}, level_2: {…}}
// population: "1493749"
// siblings: "19"
// unique_display: 0
// unique_source: 0
// unique_without_type: 0
// value: "город Екатеринбург, Свердловская область"
