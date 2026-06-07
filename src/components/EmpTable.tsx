import { useState } from "react";
import {
  Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Typography, Avatar, Pagination,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";

interface Employee {
  id: number;
  name: string;
  salary: string;
  age: number;
  image: string;
}

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Ram Naresh",
    salary: "3,20,800",
    age: 61,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Harry Potter",
    salary: "1,70,750",
    age: 63,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Swasthi Sudesh",
    salary: "86,000",
    age: 44,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Kelly Kapoor",
    salary: "4,33,060",
    age: 22,
    image: "https://i.pravatar.cc/150?img=4",
  },

];


export default function EmployeeTable() {
  const [employees, setEmployees] =
    useState<Employee[]>(initialEmployees);

  const handleAddEmployee = () => {
    const newEmployee: Employee = {
      id: employees.length + 1,
      name: `Employee ${employees.length + 1}`,
      salary: "₹ 100,000",
      age: 25,
      image: `https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg`,
    };

    setEmployees([...employees, newEmployee]);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      {}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddEmployee}
          sx={{
            borderRadius: "10px",
            px: 3,
            py: 1.2,
            textTransform: "none",
          }}
        >
          Add Employee
        </Button>
      </Box>

      {} 
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Profile Image</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>

                <TableCell>{employee.name}</TableCell>

                <TableCell>{employee.salary}</TableCell>

                <TableCell>{employee.age}</TableCell>

                <TableCell>
                  <Avatar
                    src={employee.image}
                    alt={employee.name}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    sx={{
                      bgcolor: "#eef3ff",
                      mr: 1,
                    }}
                  >
                    <VisibilityOutlinedIcon
                      sx={{ color: "#4f6ef7" }}
                    />
                  </IconButton>

                  <IconButton
                    sx={{
                      bgcolor: "#eefcf3",
                      mr: 1,
                    }}
                  >
                    <EditOutlinedIcon
                      sx={{ color: "#27ae60" }}
                    />
                  </IconButton>

                  <IconButton
                    sx={{
                      bgcolor: "#fff0f0",
                    }}
                  >
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "#eb5757" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="body2">
            Showing 1 to {employees.length} entries
          </Typography>

          <Pagination
            count={4}
            page={1}
            color="primary"
          />
        </Box>
      </TableContainer>
    </Box>
  );
}
