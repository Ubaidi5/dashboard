import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { Radio } from "antd";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div>
      {/* <Row>
        <Col>
          <Link to="/">
            <Button
              style={{
                borderRadius: 6,
                fontWeight: "bolder",
              }}
            >
              Create Sub Admin
            </Button>
          </Link>
        </Col>
        <Col>
          <span style={{ margin: "0 20px 0 30px" }}>Hello Admin</span>
        </Col>
        <Col style={{ marginLeft: 16 }}>
          <Button>Logout</Button>
        </Col>
      </Row> */}
      <Radio.Group
        onChange={(e) => {
          props.setAppMode(e.target.value);
        }}
        value={props.mode}
      >
        <Radio value="light">Light</Radio>
        <Radio value="dark">Dark</Radio>
      </Radio.Group>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  setAppMode: (mode) => dispatch({ type: "SET_APP_MODE", payload: mode }),
});

export default connect(
  (state) => ({ mode: state.app.mode }),
  mapDispatch
)(Header);
