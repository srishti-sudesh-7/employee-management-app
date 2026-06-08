import {useEffect,useState} from "react";
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

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );

      const result = await response.json();

      const formattedEmployees: Employee[] = result.data.map(
        (emp: any) => ({
          id: emp.id,
          name: emp.employee_name,
          salary: `${emp.employee_salary}`,
          age: emp.employee_age,
          image: `https://i.pravatar.cc/150?img=${emp.id % 70}`,
        })
      );
      setEmployees(formattedEmployees);
  };

  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  const handleAddEmployee = async () => {
    try {
      await fetch(
        "https://dummy.restapiexample.com/api/v1/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `Employee ${employees.length + 1}`,
            salary: "100000",
            age: "25",
          }),
        }
      );

      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };


  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
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
            textTransform: "none",
            px: 3,
          }}
        >
          Add Employee
        </Button>
      </Box>

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
              <TableCell align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>

                <TableCell>{employee.name}</TableCell>

                <TableCell>
                  {employee.salary}
                </TableCell>

                <TableCell>{employee.age}</TableCell>

                <TableCell>
                  <Avatar
                    src={employee.image}
                    alt={employee.name}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    //onClick={() =>}                    
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
                    //onClick={() =>}
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
                    //onClick={() =>}
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="body2">
            Showing {employees.length} entries
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
