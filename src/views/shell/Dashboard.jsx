import React from "react";
import { Row, Col } from "antd";
import SelectWrapper from "../../components/inputs/selectWrapper";
import CardWrapper from "../../components/cards/cardWrapper";
// import MonthPickerWrapper from "../../components/datepickers/MonthPicker";
import RangePickerWrapper from "../../components/inputs/rangePickerWrapper";
import StatusCard from "../../components/cards/statusCard";
import { FiUser } from "react-icons/fi";
import BarChartWrapper from "../../components/charts/BarChartWrapper";
import { graphData } from "../../components/mocks/graphData";
import PieChartWrapper from "../../components/charts/pieChartWrapper";

const Dashboard = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "left", fontWeight: "bold" }}>Dashboard</h1>
      <Row
        type="flex"
        span={48}
        // gutter={{ xs: 8, sm: 14, md: 14, lg: 14 }}
        style={{
          textAlign: "left",
          align: "center",
          justifyContent: "space-between",
        }}
      >
        <Col className="mainContentDiv" xs={24} md={8} lg={7}>
          <StatusCard
            // loading={customer.length < 1 ? true : false}
            iconBack={"#ccddfe"}
            iconColor={"#3677fd"}
            icon={<FiUser />}
            title="Active Customer"
            amount={270}
          />
        </Col>
        <Col className="mainContentDiv" xs={24} md={8} lg={7}>
          <StatusCard
            // loading={salon.length < 1 ? true : false}
            iconBack={"#c8ffe8"}
            iconColor={"#26e5ab"}
            icon={<FiUser />}
            title="Active Salons"
            amount={50}
          />
        </Col>
        <Col className="mainContentDiv" xs={24} md={8} lg={7}>
          <StatusCard
            // loading={loading}
            iconBack={"#ffeecb"}
            iconColor={"#fdbd31"}
            icon={<FiUser />}
            title="Total Payments"
            amount={`£6080`}
          />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: 32 }}>
        <Col span={9}>
          <SelectWrapper
            options={[
              { label: "Paid", value: "" },
              { label: "Exclusive", value: "active" },
            ]}
            placeholder="Select"
            style={{ border: "1px solid #b2b2b2" }}
          />
        </Col>
        <Col span={14}>
          <RangePickerWrapper />
        </Col>
      </Row>
      <Row
        type="flex"
        style={{ marginTop: 32 }}
        justify="space-between"
        span={24}
      >
        <Col span={9}>
          <CardWrapper style={{ height: 300 }}>
            <PieChartWrapper
              data={[
                { name: "Active", value: 24, fill: "#54ECE6" },
                { name: "In-active", value: 7, fill: "#FA7268" },
              ]}
              isLegend={true}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            />
          </CardWrapper>
        </Col>
        <Col span={14}>
          <CardWrapper style={{ height: 300 }}>
            <BarChartWrapper
              data={graphData}
              xAxis="name"
              bars={[
                { dataKey: "pv", fill: "#54ECE6" },
                { dataKey: "uv", fill: "#34305D" },
                { dataKey: "amt", fill: "#FA7268" },
              ]}
            />
          </CardWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
