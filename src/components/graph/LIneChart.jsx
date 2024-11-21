import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LineChartdata } from "./data";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p
          style={{ fontWeight: "bold", color: "#000" }}
        >{`Current Week: $${payload[0].value}`}</p>
        <p
          style={{ fontWeight: "bold", color: "#8da4c9" }}
        >{`Previous Week: $${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const RevenueChart = ({ isDarkMode }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={LineChartdata}
        margin={{ top: 20, right: 30, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#E0E0E0"
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tick={{
            fill: isDarkMode ? "#FFFFFF66" : "#1C1C1C66",
            dy: 12,
            fontSize: 12,
          }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => (value === 0 ? value : `${value}M`)}
          domain={[0, 30]}
          ticks={[0, 10, 20, 30]}
          tick={{
            fill: isDarkMode ? "#FFFFFF66" : "#1C1C1C66",
            dx: -12,
            fontSize: 12,
          }}
        />
        <Tooltip content={<CustomTooltip />} />

        <Line
          type="monotone"
          dataKey="currentWeek"
          stroke={isDarkMode ? "#A8C5DA" : "#000"}
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="previousWeek"
          stroke={isDarkMode ? "#C6C7F8" : "#8da4c9"}
          strokeWidth={3}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
