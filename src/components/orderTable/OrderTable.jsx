import React, { useState, useMemo, useContext } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Paper,
  Modal,
  Button,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTable, useSortBy } from "react-table";
import { Add, MoreVert } from "@mui/icons-material";
import Person1 from "../rightPanel/Images/person1.svg";
import Person2 from "../rightPanel/Images/person2.svg";
import Person3 from "../rightPanel/Images/person3.svg";
import Person4 from "../rightPanel/Images/person4.svg";
import { DataContainer } from "../default/DefaultStyled";

import { initialData, columns } from "./data";
import { AppContext } from "../../context/AppContext";

const OrdersTable = () => {
  const [data, setData] = useState(initialData);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [newRow, setNewRow] = useState({
    id: "",
    user: "",
    project: "",
    address: "",
    date: "",
    status: "",
  });
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { isDarkMode } = useContext(AppContext);

  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.user.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.project.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [data, searchInput]);

  const tableInstance = useTable(
    {
      columns,
      data: filteredData,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRow = () => {
    setData([...data, { ...newRow, icon: getIconForUser(newRow.user) }]);
    setNewRow({
      id: "",
      user: "",
      project: "",
      address: "",
      date: "",
      status: "",
    });
    handleCloseModal();
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const handleDelete = () => {
    setData(data.filter((row) => !selectedRows[row.id]));
    setSelectedRows({});
    handleMenuClose();
  };

  const handleHide = () => {
    const updatedData = data.map((row) =>
      selectedRows[row.id] ? { ...row, hidden: true } : row
    );
    setData(updatedData);
    setSelectedRows({});
    handleMenuClose();
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "In Progress":
        return { color: "#FFC555", dotColor: "#FFC555" };
      case "Complete":
        return { color: "green", dotColor: "green" };
      case "Rejected":
        return { color: "red", dotColor: "red" };
      default:
        return { color: "black", dotColor: "black" };
    }
  };

  const getIconForUser = (userName) => {
    switch (userName) {
      case "Natal Craig":
        return Person1;
      case "Kate Morrison":
        return Person2;
      case "Drew Cano":
        return Person3;
      case "Alex Smith":
        return Person4;
      default:
        return Person1;
    }
  };

  return (
    <DataContainer isDarkMode={isDarkMode}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#FFFFFF",
          color: isDarkMode ? "white" : "black",
          overflowY: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#FFFFFF0D" : "#F7F9FB",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={handleOpenModal}
              sx={{ color: isDarkMode ? "white" : "black" }}
            >
              <Add sx={{ color: isDarkMode ? "white" : "black" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: isDarkMode ? "white" : "#000" }}
            >
              Orders
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              value={searchInput}
              onChange={handleSearchChange}
              InputProps={{
                sx: {
                  backgroundColor: "white",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                },
              }}
            />
            <IconButton
              onClick={handleMenuOpen}
              sx={{ color: isDarkMode ? "white" : "black" }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
              <MenuItem onClick={handleHide}>Hide</MenuItem>
            </Menu>
          </Box>
        </Toolbar>

        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const newSelectedRows = {};
                      rows.forEach((row) => {
                        newSelectedRows[row.original.id] = isChecked;
                      });
                      setSelectedRows(newSelectedRows);
                    }}
                  />
                </TableCell>
                {headerGroups[0].headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      color: isDarkMode ? "white" : "black",
                      fontWeight: "bold",
                      borderBottom: isDarkMode
                        ? "1px solid #444"
                        : "1px solid #ddd",
                    }}
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return !row.original.hidden ? (
                  <TableRow
                    {...row.getRowProps()}
                    sx={{
                      backgroundColor: isDarkMode
                        ? row.index % 2 === 0
                          ? "#333"
                          : "#1e1e1e"
                        : "#FFFFFF",
                      transition: "background-color 0.3s, transform 0.3s",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#444" : "#f5f5f5",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={selectedRows[row.original.id] || false}
                        onChange={() => handleCheckboxChange(row.original.id)}
                      />
                    </TableCell>
                    {row.cells.map((cell) => (
                      <TableCell
                        {...cell.getCellProps()}
                        sx={{
                          color: isDarkMode ? "white" : "black",
                          borderBottom: isDarkMode
                            ? "1px solid #444"
                            : "1px solid #ddd",
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.01)",
                          },
                        }}
                      >
                        {cell.column.id === "user" ? (
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                              src={row.original.icon}
                              alt="user icon"
                              style={{
                                width: "24px",
                                height: "24px",
                                marginRight: "8px",
                              }}
                            />
                            {cell.render("Cell")}
                          </Box>
                        ) : cell.column.id === "status" ? (
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <span
                              style={{
                                display: "inline-block",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: getStatusStyles(
                                  row.original.status
                                ).dotColor,
                                marginRight: "8px",
                              }}
                            />
                            <span
                              style={{
                                color: getStatusStyles(row.original.status)
                                  .color,
                                fontSize: 12,
                              }}
                            >
                              {cell.render("Cell")}
                            </span>
                          </Box>
                        ) : (
                          cell.render("Cell")
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ) : null;
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Order
            </Typography>
            {Object.keys(newRow).map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                fullWidth
                margin="dense"
                name={field}
                value={newRow[field]}
                onChange={handleNewRowChange}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
              onClick={handleAddRow}
            >
              Add Order
            </Button>
          </Box>
        </Modal>
      </Paper>
    </DataContainer>
  );
};

export default OrdersTable;
