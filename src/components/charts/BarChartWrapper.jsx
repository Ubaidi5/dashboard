import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartWrapper = (props) => {
  const { data, xAxis, margin, bars } = props;
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        width={400}
        height={500}
        margin={
          margin
            ? margin
            : {
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }
        }
      >
        <XAxis
          dataKey={xAxis}
          axisLine={false}
          tickCount={0}
          tick={true}
          tickSize={0}
          tickMargin={15}
        />
        <Tooltip />
        <Legend align={"center"} />
        {bars.map((item) => {
          return <Bar dataKey={item.dataKey} fill={item.fill} />;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWrapper;
