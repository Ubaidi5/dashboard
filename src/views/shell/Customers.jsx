import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/header/ContentHeader";
import TableWrapper from "../../components/react-table";
// import SwitchWrapper from "../../components/switch";
// import userAvatar from "../../images/Tim-01.png";
// import AvatarWrapper from "../../components/avatar/index";
// import { TableButton } from "../../components/styled-component/styledButton";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { useMutation } from "react-apollo";
// import { SET_CUSTOMER_STATUS } from "../../query/allMutations";
// import { Select } from "antd";

// const { Option } = Select;

const Customers = (props) => {
  const tableData = [
    {
      firstName: "Ubaid",
      lastName: "Hussain",
      company: "eforte solutions",
      email: "Ubaid7625@gmail.com",
    },
  ];

  // Table Filter
  const [data, setData] = useState([]);
  const [textbox, setTextbox] = useState("");

  const textboxSearch = (e) => {
    setTextbox(e.target.value);
  };

  useEffect(() => {
    const textSearch = () => {
      let filteredData = tableData.filter((value) => {
        return (
          value.firstName.toLowerCase().includes(textbox.toLowerCase()) ||
          value.lastName.toLowerCase().includes(textbox.toLowerCase()) ||
          value.email.toLowerCase().includes(textbox.toLowerCase())
        );
      });
      setData(filteredData);
    };
    textSearch();
  }, [textbox]);

  return (
    <div>
      <ContentHeader
        title="Customers"
        handleTextSearch={textboxSearch}
        // handleSelectSearch={selectboxSearch}
        // count={props.tableData ? props.tableData.length : 0}
        count={data.length}
        options={[
          { label: "View All", value: "" },
          { label: "Active", value: "active" },
          { label: "In-active", value: "deactivate" },
          { label: "Records", value: "[{" },
          { label: "No record", value: "[]" },
        ]}
      />
      <div>
        <TableWrapper
          tableData={data}
          pageSize={5}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              sortable: false,
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              sortable: false,
            },
            { Header: "Email", accessor: "email", sortable: false },
          ]}
        />
      </div>
    </div>
  );
};

export default Customers;
