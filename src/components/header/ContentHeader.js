import React from "react";
import { Row, Col } from "antd";
import InputWrapper from "../../components/inputs/inputWrapper";
import SelectWrapper from "../../components/inputs/selectWrapper";
import { AddButton } from "../../components/buttons";

//Need to make this responsive
let k = 0;
const ContentHeader = (props) => {
  return (
    <Row align="center" justify="space-between" span={24}>
      <Col xs={24} sm={12} md={12} lg={10} xl={10}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: 600, color: "#1D194D", fontSize: 24 }}>
            {props.title}
          </span>
          {props.count ? (
            <>
              <div
                style={{
                  backgroundColor: "#49D3CE",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  margin: 8,
                }}
              />

              <span
                className="small"
                style={{ fontWeight: 600, fontSize: 24, color: "#1D194D" }}
              >
                {props.count}
              </span>
            </>
          ) : null}
        </div>
      </Col>
      <Col xs={24} sm={12} md={12} lg={10} xl={10}>
        <Row span={24} justify="end">
          <Col style={{ marginRight: 8 }} span={8}>
            <InputWrapper
              name="textbox"
              // prefix={<FiSearch />}
              placeholder="Search"
              onChange={props.handleTextSearch}
            />
          </Col>

          <Col>
            <SelectWrapper
              onChange={props.handleSelectSearch}
              options={props.options}
              // value={userInfo.country}
              placeholder="Select"
              style={{ border: "1px solid #b2b2b2" }}
            />
          </Col>
          {props.addNew ? (
            <Col style={{ marginLeft: 8 }}>
              <AddButton onClick={props.addModalVisible}>+ Add New</AddButton>
            </Col>
          ) : null}
        </Row>
      </Col>
    </Row>
  );
};

ContentHeader.defaultProps = {
  handleSelectSearch: () => {},
  handleTextSearch: () => {},
};

export default ContentHeader;
