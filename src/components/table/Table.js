import React, { useMemo } from 'react';
import useTable from 'react-table';
import { useSelector } from 'react-redux';

export default function Table() {
  const citiesTable = useSelector((state) => state.searchSliceReducer.citiesTable);

  const data = useMemo(
    () => citiesTable.map((item, num) => ({
      col1: num + 1,
      col2: item.name,
      col3: item.full_name,
      col4: item.telcod,
    })),

    [citiesTable],
  );

  const columns = useMemo(() => [
    {
      Header: 'Номер п/п',
      accessor: 'col1',
    },
    {
      Header: 'Наименование города',
      accessor: 'col2',
    },
    {
      Header: 'Полное наименование города',
      accessor: 'col3',
    },
    {
      Header: 'Телефонный код города',
      accessor: 'col4',
    },
  ], []);

  return (
    <table>
      <thead>
        <tr>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
        </tr>
      </tbody>
    </table>
  );
}

// name: 'Богданович', full_name: 'Богданово (Кировская область, Уржумский)', telcod: 34376
