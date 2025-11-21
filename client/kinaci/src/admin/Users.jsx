import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

const handleDelete = async (id) => {
  try {
    await fetch(`${API_URL}/api/users/${id}`, { method: "DELETE" });
    setUsers(users.filter((user) => user._id !== id)); // frontend update
  } catch (err) {
    console.error(err);
  }
};

  const handleEdit = async (user) => {
  const fullName = prompt("Name:", user.fullName);
  const email = prompt("Email:", user.email);
  const role = prompt("Role (Admin/User):", user.role);

  if (fullName && email && role) {
    try {
      const res = await fetch(`${API_URL}/api/users/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, role }),
      });
      const updatedUser = await res.json();
      setUsers(users.map(u => (u._id === updatedUser._id ? updatedUser : u)));
    } catch (err) {
      console.error(err);
    }
  }
};


  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom   sx={{ color: "#ffffff" }}>
        Users
      </Typography>

      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        sx={{
          mb: 2,
          input: { color: "#fff" }, // yazı rəngi
          label: { color: "#90caf9" }, // label rəngi
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#555" }, // border rəngi
            "&:hover fieldset": { borderColor: "#90caf9" },
            "&.Mui-focused fieldset": { borderColor: "#90caf9" },
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#1e1e1e", color: "#fff" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleEdit(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(user._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {filteredUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Users;
