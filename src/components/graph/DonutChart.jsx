import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { DonutChartdata } from "./data";

const COLORS = DonutChartdata.map((entry) => entry.color);

const Container = styled.div`
  height: 290px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF0D" : "#f5f5f5"};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  width: 37%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ isDarkMode }) =>
      isDarkMode
        ? "0 4px 20px rgba(255, 255, 255, 0.2)"
        : "0 4px 20px rgba(0, 0, 0, 0.15)"}; /* Shadow grows on hover */
  }

  @media (max-width: 429px) {
    width: 88%;
  }
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#000")};
`;

const Legend = styled.div`
  text-align: left;
  font-size: 12px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ColorBox = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;

const LegendText = styled.span`
  flex: 1;
  font-size: 14px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#555")};
`;

const LegendValue = styled.span`
  font-size: 14px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#333")};
`;

const TooltipContainer = styled.div`
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p style={{ margin: 0 }}>{`${payload[0].value.toFixed(1)}%`}</p>
      </TooltipContainer>
    );
  }

  return null;
};

const SalesDonutChart = ({ isDarkMode }) => {
  return (
    <Container isDarkMode={isDarkMode}>
      <Title isDarkMode={isDarkMode}>Total Sales</Title>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={DonutChartdata}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            dataKey="value"
            paddingAngle={0}
          >
            {DonutChartdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <Legend>
        {DonutChartdata.map((entry, index) => (
          <LegendItem key={`legend-${index}`}>
            <ColorBox color={entry.color} />
            <LegendText isDarkMode={isDarkMode}>{entry.name}</LegendText>
            <LegendValue isDarkMode={isDarkMode}>
              ${entry.value.toFixed(2)}
            </LegendValue>
          </LegendItem>
        ))}
      </Legend>
    </Container>
  );
};

export default SalesDonutChart;
