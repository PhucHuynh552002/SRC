import React from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Filter } from "./Filter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Pagination } from "react-bootstrap";
import "./Table.css";
import TableFooter from "./TableFooter";

let active = 2;
let items = [];
for (let i = 1; i <= 5; ++i) {
  items.push(
    <Pagination.Item key={i} active={i === active}>
      {i}
    </Pagination.Item>
  );
}

export const Table = ({
  columns,
  data,
  rowsPerPage,
  totalRows,
  placeholder,
  currentPage,
  paginate,
  
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;
  return (
    <form>
    <div class="sizefont">
      <Filter
        filter={globalFilter}
        setFilter={setGlobalFilter}
        placeholder={placeholder}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row,i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => console.log(row.original)}>
                {row.cells.map((cell,j) => {
                  return (
                    <td  rowSpan={cell.rowSpan} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TableFooter
        rowsPerPage={rowsPerPage}
        totalRows={totalRows}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
    </form>
  );
};
