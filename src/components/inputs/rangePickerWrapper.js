import React from "react";
import { DatePicker } from "antd";
import styled from "styled-components";

const { RangePicker } = DatePicker;

// const StyledPicker = styled(RangePicker)`
//   color: palevioletred;
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
//   input {
//     background-color: ${(props) =>
//       props.theme[props.theme.mode].background.primary};
//     color: ${(props) => props.theme[props.theme.mode].textColor.primary};
//     border: 1px solid ${(props) => props.theme[props.theme.mode].primary.main};
//     ${(props) => (props.appStyles ? props.appStyles : null)};
//     padding-top: 18px;
//     padding-bottom: 18px;
//   }

//   .ant-calendar-picker-input {
//     background-color: ${(props) =>
//       props.theme[props.theme.mode].background.primary};
//     border: 1px solid ${(props) => props.theme[props.theme.mode].primary.main};
//   }

//   * {
//     color: ${(props) => props.theme[props.theme.mode].primary.main};
//   }
// `;

const RangePickerWrapper = styled(RangePicker)`
  display: flex;
  border: 1px solid #49d3ce;
  border-radius: 3px;

  &:hover {
    border: 1px solid #49d3ce;
  }

  .ant-picker-input {
    color: #49d3ce;
  }
`;

export default RangePickerWrapper;
