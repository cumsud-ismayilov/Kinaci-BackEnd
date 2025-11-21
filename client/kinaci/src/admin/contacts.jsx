import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function contacts() {
  const [contacts, setContacts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/contact`);
        const data = await res.json();
        console.log("Backend cavabı:", data); // bunu əlavə et
        setContacts(data); // və ya data.contact
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Silmək istədiyinizə əminsiniz?")) return;

    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        setContacts(contacts.filter((c) => c._id !== id));
        alert(data.message); // və ya toast istifadə et
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Typography variant="h5" mb={2}   sx={{ color: "#ffffff" }}>
        Contact Form Göndərişləri
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad & Soyad</TableCell>
              <TableCell>Telefon</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Göndərilmə Tarixi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.userId || "-"}</TableCell>
                <TableCell>
                  {new Date(contact.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Sil
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default contacts;
