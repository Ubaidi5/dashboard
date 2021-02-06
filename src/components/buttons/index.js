import styled from "styled-components";
import { Button } from "antd";

const ButtonWrapper = styled(Button)`
  border: 1px solid #49d3ce !important;
  outline: none;
  background-color: #49d3ce;
  border-radius: 5px;
  color: #fff !important;
  padding: 4px 16px;
  width: 100%;
  height: 32px;
  &:hover,
  &:focus {
    background-color: #fff !important;
    color: #49d3ce !important;
  }
`;

export default ButtonWrapper;

export const TableButton = styled(Button)`
  border: 1px solid #1d194d;
  outline: none;
  color: #1d194d;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover,
  &:focus {
    color: #fff !important;
    background-color: #1d194d;
  }
`;

export const TableSwitchButton = styled.button`
  padding: 0 16px;
  height: 32px;
  width: 100%;
  line-height: 1;
  border: 1px solid #9694ac;
  color: #9694ac;
  background-color: transparent;
  cursor: pointer;
  &:focus,
  &:hover {
    color: #1d194d;
  }
`;

export const AddButton = styled.button`
  border: 1px solid #49d3ce;
  border-radius: 50px;
  height: 40px;
  width: 120px;
  font-size: 16px;
  // margin-top: 16px;
  color: #49d3ce;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #fff !important;
    background-color: #49d3ce;
  }
`;
