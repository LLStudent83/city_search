/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import {
  useTable, useFilters, useSortBy, useGlobalFilter,
} from 'react-table';
import { useSelector } from 'react-redux';
import './table.scss';
import ColumnFilter from '../columnFilter/ColumnFilter';
import DelRow from '../delrow/Delrow';

export default function Table() {
  const citiesTable = useSelector((state) => state.searchSliceReducer.citiesTable);

  const data = useMemo(
    () => citiesTable.map((item, num) => ({
      col1: num + 1,
      col2: item.name_display,
      col3: item.description,
      col4: item.area,
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
      Header: 'Полное области',
      accessor: 'col3',
      Filter: ColumnFilter,
    },
    {
      Header: 'Площадь территории, км кв',
      accessor: 'col4',
      Filter: ColumnFilter,
    },
    {
      Filter: ColumnFilter,
      disableFilters: true,
      Header: 'Удалить город',
      id: 'delete',

      Cell: (row) => (
        <DelRow row={row} />
      ),

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
