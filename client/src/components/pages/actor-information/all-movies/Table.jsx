import React from "react";
import TableBody from "./table/TableBody";
import TableHead from "./table/TableHead";
import { useState } from "react";
import classes from "./table.module.css";
import TableData from "./../../../../TableData.json";
const Table = () => {
  const [tableData, setTableData] = useState(TableData);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  const columns = [
    // { label: "Expert Score", accessor: "expertScore" },
    { label: "User Score", accessor: "userScore" },
    { label: "Title", accessor: "title" },
    { label: "Role", accessor: "role" },
    { label: "Box Office $", accessor: "boxOffice" },
    { label: "Year", accessor: "year" },
  ];

  return (
    <div>
      <table className={classes.table}>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </div>
  );
};

export default Table;
