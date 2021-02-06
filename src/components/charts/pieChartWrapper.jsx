import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Sector,
  ResponsiveContainer,
} from "recharts";

const PieChartWrapper = (props) => {
  const { data, margin, isLegend } = props;
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <ResponsiveContainer>
      <PieChart margin={margin ? margin : null} isLegend={true}>
        <Pie
          data={data}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={"50%"}
          cy={"50%"}
          fill={"#0088FE"}
          innerRadius={80}
          dataKey="value"
          onMouseEnter={(_, index) => {
            alert("entered with index", index);
            setActiveIndex(index);
          }}
          onMouseOver={(payload, index) => {
            setActiveIndex(index);
          }}
        >
          {data.map((item, index) => {
            return <Cell key={`cell-${index}`} fill={item.fill} />;
          })}
        </Pie>
        <Tooltip />
        {isLegend ? <Legend align={"center"} /> : null}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWrapper;

const renderActiveShape = (props, b) => {
  const { cx, cy, percent, fill } = props;

  return (
    <g>
      <text
        width={400}
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        style={{ fontSize: "250%" }}
      >{`${(percent * 100).toFixed(2)}%`}</text>
      <Sector {...props} />
    </g>
  );
};
