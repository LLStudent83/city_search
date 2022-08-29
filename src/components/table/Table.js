/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import {
  useTable, useFilters, useSortBy, useGlobalFilter,
} from 'react-table';
import { useSelector } from 'react-redux';
import './table.scss';
import ColumnFilter from '../columnFilter/ColumnFilter';

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
      Filter: ColumnFilter,
      disableFilters: true,
    },
    {
      Header: 'Наименование города',
      accessor: 'col2',
      Filter: ColumnFilter,
    },
    {
      Header: 'Полное наименование города',
      accessor: 'col3',
      Filter: ColumnFilter,
    },
    {
      Header: 'Телефонный код города',
      accessor: 'col4',
      Filter: ColumnFilter,
    },
  ], []);

  const tableSities = useTable({
    columns,
    data,
  }, useGlobalFilter, useFilters, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableSities;
  // eslint-disable-next-line max-len
  // console.log('getTableProps', getTableProps()); // {role: 'table'}

  // eslint-disable-next-line max-len
  // console.log('headerGroups.getHeaderGroupProps', headerGroups[0].getHeaderGroupProps()); // {key: 'headerGroup_0', role: 'row'}
  // eslint-disable-next-line max-len
  // console.log('headerGroups', headerGroups); // [0: {headers: Array(4), getHeaderGroupProps: ƒ, getFooterGroupProps: ƒ}]

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map((column) => (
              <th className="th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <div className="column_filter">
                  {column.canFilter ? column.render('Filter') : null}
                </div>
                <span>{
                column.isSorted
                  ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                  : ''
            }
                </span>
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
                  <td className="tb" {...cell.getCellProps()}>
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
// column.canFilter ? column.render('Filter') : null
