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

function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch(`${API_URL}/api/inquiry`);
        const data = await res.json();
        setInquiries(data);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Silinsin?")) return;

    try {
      await fetch(`${API_URL}/api/inquiry/${id}`, { method: "DELETE" });
      setInquiries((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  const filtered = inquiries.filter(
    (i) =>
      i.name?.toLowerCase().includes(search.toLowerCase()) ||
      i.email?.toLowerCase().includes(search.toLowerCase()) ||
      i.message?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box>
      <Typography variant="h4" mb={3} sx={{ color: "#ffffff" }}>
        Inquiries Management
      </Typography>

      <TextField
        label="Search inquiries"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((inq) => (
                <TableRow key={inq._id}>
                  <TableCell>{inq.name}</TableCell>
                  <TableCell>{inq.email}</TableCell>
                  <TableCell>{inq.phone}</TableCell>
                  <TableCell>{inq.message}</TableCell>
                  <TableCell>{inq.productId}</TableCell>

                  <TableCell align="right">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(inq._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No inquiries found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Inquiries;
