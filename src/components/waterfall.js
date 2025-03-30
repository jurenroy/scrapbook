import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Start', uv: 0, pv: 0 },
  { name: 'Step 1', uv: 4000, pv: 0 },
  { name: 'Step 2', uv: -2000, pv: 4000 },
  { name: 'Step 3', uv: 3000, pv: 2000 },
  { name: 'Total', uv: 5000, pv: 0 },
];

const WaterfallChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          isAnimationActive={false}
          label={{ position: 'top' }}
        />
        <Bar
          dataKey="pv"
          fill="transparent"
          isAnimationActive={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default WaterfallChart;