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
        .then((response) => {
          if (!response.ok) {
            dispatch(setField({ error: 'Какаая то проблема с сетью или API. Перезагрузите пожалуйста страницу' }));
            throw new Error('Какаая то проблема с сетью или API. Перезагрузите пожалуйста страницу');
          }
          return response.json();
        })
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
