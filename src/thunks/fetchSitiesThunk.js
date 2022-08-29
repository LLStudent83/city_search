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
      // fetch(`http://geohelper.info/api/v1/cities?apiKey=KIyrDT5b5883Ys48bDljeWMPqty6kkHF&locale%5Blang%5D=ru&filter%5BcountryIso%5D=RU&filter%5BnameStrictLanguage%5D=ru&filter%5Bname%5D=${searchQuery}`)
      // fetch(`https://nominatim.openstreetmap.org/search?format=json&city=${searchQuery}&country=россия&limit=50`)
      fetch(`https://htmlweb.ru/geo/api.php?json&city_name=${searchQuery}&api_key=c1eff0ca350c858eae35441799626a4e`)
        .then((response) => response.json())
        .then((cities) => {
          const madCities = getModifiedArrayOfCities(cities, 'id', 'full_name');
          dispatch(setField({ cities, loading: false, citiesList: madCities }));
        });
      // const madCities = getModifiedArrayOfCities(cities, 'id', 'full_name');// cities,
      // dispatch(setField({cities, loading: false, citiesList: madCities })); // cities,
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
}

// const cities = {
//   0: {
//     id: 1916, name: 'Богданович', full_name: 'Богданово (Кировская область, Уржумский)', area: 55, telcod: 34376, latitude: 56.7803,
//   },
//   1: {
//     id: 71361, name: 'Богдановка', full_name: 'Богданово (Кировская область, Уржумский)', area: 8045, telcod: '', latitude: 41.2644,
//   },
//   2: {
//     id: 104723, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 6, telcod: '', latitude: 57.9086,
//   },
//   3: {
//     id: 104772, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 1, telcod: '', latitude: 56.0739,
//   },
//   4: {
//     id: 104773, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 27, telcod: '', latitude: 57.0662,
//   },
//   5: {
//     id: 104774, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 59, telcod: '', latitude: 52.231,
//   },
//   6: {
//     id: 104775, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 15, telcod: '', latitude: 51.939,
//   },
//   7: {
//     id: 104776, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 50, telcod: '', latitude: 54.5197,
//   },
//   8: {
//     id: 104777, name: 'Богданово', full_name: 'Богданово (Кировская область, Уржумский)', area: 57, telcod: '', latitude: 54.2299,
//   },
//   9: {
//     id: 105743, name: 'Богдановский', full_name: 'Богданово (Кировская область, Уржумский)', area: 6, telcod: '', latitude: 61.4581,
//   },
//   balans: 0,
//   limit: 13,
// };
