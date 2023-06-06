import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PriceSizeProps {
  data: Array<{ price: number; size: number }>;
}
const PriceSize = ({ data }: PriceSizeProps) => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart
      margin={{
        top: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="price" name="price" unit="czk" />
      <YAxis type="number" dataKey="size" name="size" unit="m2" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="Price size graph" data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default PriceSize;
