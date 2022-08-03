import React from "react";
import { PieChart, Pie } from "recharts";

const Chart = () => {
  const data = [
    { name: "Geeksforgeeks", fill: "#395FF1", data: 1000 },
    { name: "Technical scripter", fill: "#0D0F37", data: 700 },
    { name: "Geek-i-knack", fill: "#949CAE", data: 200 },
  ];

  return (
    <PieChart width={320} height={320}>
      <Pie
        data={data}
        dataKey="data"
        outerRadius={120}
        innerRadius={70}
        fill="green"
      />
    </PieChart>
  );
};

export default Chart;
