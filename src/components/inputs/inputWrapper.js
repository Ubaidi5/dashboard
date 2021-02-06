import { Input } from "antd";
import styled from "styled-components";

const InputWrapper = styled(Input)`
  border-radius: 4px;
  box-shadow: #49d3ce;
  border-color: ${(props) =>
    props.style ? props.style.borderColor : "#49d3ce !important"};
  outline: none !important;
`;

export default InputWrapper;
