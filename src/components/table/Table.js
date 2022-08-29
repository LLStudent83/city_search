import React, { useMemo } from 'react';
import { useTable } from 'react-table';
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

  const tableSities = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableSities;
  // eslint-disable-next-line max-len
  console.log('getTableProps', getTableProps()); // {role: 'table'}

  // eslint-disable-next-line max-len
  console.log('headerGroups.getHeaderGroupProps', headerGroups[0].getHeaderGroupProps()); // {key: 'headerGroup_0', role: 'row'}
  // eslint-disable-next-line max-len
  console.log('headerGroups', headerGroups); // [0: {headers: Array(4), getHeaderGroupProps: ƒ, getFooterGroupProps: ƒ}]

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))
}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {
                    cell.render('Cell')
}
                  </td>
                ))}
              </tr>
            );
          })

        }

      </tbody>
    </table>
  );
}

// name: 'Богданович', full_name: 'Богданово (Кировская область, Уржумский)', telcod: 34376
