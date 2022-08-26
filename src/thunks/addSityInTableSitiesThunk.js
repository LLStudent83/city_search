import { useSelector } from 'react-redux';
import { changeCitiesTable } from '../features/search/searchSlice';
import getCityById from '../scripts/getCityById';

export default function addSityInTableSitiesThunkCreator(id) {
// получить изначлаьниый массив городов
  // выбрать в нем нужный по id
  // добавить его в массив городов которые находятся в таблице
  // закрыть выпадающий список и обнулить состояния выпадающего списка и input
  return async function fetchSitiesThunk(dispatch) {
    const { sities } = useSelector((state) => state.searchSliceReducer);

    dispatch(changeCitiesTable({ cityObj: getCityById(sities, id) }));
  };
}
