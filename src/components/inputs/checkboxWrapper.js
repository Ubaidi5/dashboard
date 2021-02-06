import { Checkbox } from "antd";
import styled from "styled-components";

export default styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #49d3ce !important;
    border: 1px solid #49d3ce;
  }

  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner{
    border: 1px solid #49d3ce; !important;
  }
  
  .ant-checkbox-checked::after {
    border: 1px solid #49d3ce; !important;
  }
`;
