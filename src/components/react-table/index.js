import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";
import Style from "./Style";

const StyledTable = styled(ReactTable)`
  ${Style}
`;

const TableWrapper = (props) => {
  return (
    <StyledTable
      data={props.tableData}
      columns={props.columns}
      minRows={props.tableData.length + 1}
      noDataText="No data found"
      resizable={false}
      // pageText={""}
      pageSize={100005}
      // defaultPageSize={2}
      previousText={"‹"}
      nextText={"›"}
      showPageSizeOptions={false}
      // SubComponent={(r) => <div>Yalla I render successfully!</div>}
      {...props}
    />
  );
};

export default TableWrapper;
