import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function BarChartComponent({ data, xKey, yKey, width = 600, height = 400, color = "#82ca9d" }) {
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={yKey} fill={color} />
    </BarChart>
  );
}

export default BarChartComponent;
