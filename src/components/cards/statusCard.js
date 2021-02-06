import React from "react";
import { Skeleton, Row, Col } from "antd";
import CardWrapper from "../../components/cards/cardWrapper";

const UserStatCard = (props) => (
  <CardWrapper
    className={props.styledClass}
    style={{ borderRadius: 3, padding: "0 8px", margin: "0 4px" }}
  >
    <Skeleton loading={props.loading} avatar active>
      <Row type="flex" justify="space-between">
        <Col>
          <p style={{ fontWeight: 450 }}>{props.title}</p>
          <p style={{ fontWeight: "bolder", fontSize: 16 }}>{props.amount}</p>
        </Col>

        <Col>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: props.iconColor,
              width: 40,
              height: 40,
              fontSize: "1.3rem",
              borderRadius: 2,
              backgroundColor: props.iconBack,
            }}
          >
            {props.icon}
          </div>
        </Col>
      </Row>
    </Skeleton>
  </CardWrapper>
);

export default UserStatCard;
