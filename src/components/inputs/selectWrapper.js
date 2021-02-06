import React, { useState } from "react";
import { Select } from "antd";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  display: block;
  .ant-select,
  .ant-select-selector {
    box-shadow: ${(props) =>
      props.style ? props.style.boxShadow : "#acacac !important"};
    border: ${(props) =>
      props.style ? props.style.border : " 1px solid #b2b2b2 !important"};
    border-radius: 3px !important;
  }
`;

const { Option } = Select;

const SelectWrapper = (props) => {
  const { placeholder, onChange } = props;
  const [options, setOptions] = useState(props.options);

  const handleSearch = (val) => {
    const filteredOptions = props.options.filter((option) => {
      return option.name.toLowerCase().includes(val.toLowerCase());
    });
    setOptions(filteredOptions);
  };

  return (
    <StyledSelect
      onChange={onChange}
      showSearch
      onSearch={handleSearch}
      placeholder={placeholder}
    >
      {options.map((option) => {
        return <Option value={option.value}>{option.label}</Option>;
      })}
    </StyledSelect>
  );
};

SelectWrapper.defaultProps = {
  placeholder: "select",
  options: [],
  onChange: () => {},
};

export default SelectWrapper;
