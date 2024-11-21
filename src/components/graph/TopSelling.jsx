import styled from "styled-components";
import { Tableproducts } from "./data";

const TableContainer = styled.div`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF0D" : "#F7F9FB"};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ isDarkMode }) =>
      isDarkMode
        ? "0 4px 20px rgba(255, 255, 255, 0.2)"
        : "0 4px 20px rgba(0, 0, 0, 0.15)"};
  }

  @media (max-width: 429px) {
    width: 85%;
  }
`;

const TableTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
  margin-bottom: 16px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-size: 12px;
  font-weight: 500;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "#1C1C1C66")};
  text-align: left;
  padding-bottom: 12px;
  border-bottom: 1px solid
    ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF1A" : "#e5e7eb")};
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  font-size: 12px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#1C1C1C")};
  padding: 12px 0;
`;

const TopSellingProductsTable = ({ isDarkMode }) => {
  return (
    <TableContainer isDarkMode={isDarkMode}>
      <TableTitle isDarkMode={isDarkMode}>Top Selling Products</TableTitle>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader isDarkMode={isDarkMode}>Name</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Price</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Quantity</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Tableproducts.map((product, index) => (
            <TableRow key={index}>
              <TableCell isDarkMode={isDarkMode}>{product.name}</TableCell>
              <TableCell isDarkMode={isDarkMode}>{product.price}</TableCell>
              <TableCell isDarkMode={isDarkMode}>{product.quantity}</TableCell>
              <TableCell isDarkMode={isDarkMode}>{product.amount}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TopSellingProductsTable;
