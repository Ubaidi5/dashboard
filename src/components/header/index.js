import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
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
    </div>
  );
};

export default Header;
