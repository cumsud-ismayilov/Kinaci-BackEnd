import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function index({ open, handleClose, onSave, property }) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    city: "",
    rooms: "",
    size: "",
    squareMeter: "",
    baths: "",
    floor: "",
    date: "",
    distanceOfSea: "",
    propertyType: "",
    transactionType: "",
    citizenship: "",
    investment: "",
    residencePermit: "",
    images: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
    },
    infrastructure: [],
  });

  const [infrastructureInput, setInfrastructureInput] = useState("");

  useEffect(() => {
    if (property) {
      setFormData(property);
    } else {
      setFormData({
        title: "",
        price: "",
        location: "",
        city: "",
        rooms: "",
        size: "",
        squareMeter: "",
        baths: "",
        floor: "",
        date: "",
        distanceOfSea: "",
        propertyType: "",
        transactionType: "",
        citizenship: "",
        investment: "",
        residencePermit: "",
        images: {
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          image5: "",
          image6: "",
          image7: "",
          image8: "",
        },
        infrastructure: [],
      });
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("image")) {
      setFormData((prev) => ({
        ...prev,
        images: { ...prev.images, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddInfrastructure = () => {
    if (infrastructureInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        infrastructure: [...prev.infrastructure, infrastructureInput],
      }));
      setInfrastructureInput("");
    }
  };

  const handleRemoveInfrastructure = (index) => {
    setFormData((prev) => ({
      ...prev,
      infrastructure: prev.infrastructure.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    handleClose();
  };

const inputStyle = {
  mb: 2,
  "& .MuiInputBase-root": {
    backgroundColor: "#fff", // input fonu ağ
    color: "#000",           // input mətni qara
  },
  "& .MuiInputBase-input": {
    color: "#000",           // input içi text qara
  },
  "& .MuiInputLabel-root": {
    color: "#000",           // label qara
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",     // border qara
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
  },
};

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          {property ? "Edit Property" : "Add Property"}
        </Typography>

        {[
          "title",
          "price",
          "location",
          "city",
          "rooms",
          "size",
          "squareMeter",
          "baths",
          "floor",
          "date",
          "distanceOfSea",
          "propertyType",
          "transactionType",
          "citizenship",
          "investment",
          "residencePermit",
        ].map((field) => (
          <TextField
            key={field}
            fullWidth
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            sx={inputStyle}
          />
        ))}

        {/* Images Inputs */}
        {Object.keys(formData.images).map((img) => (
          <TextField
            key={img}
            fullWidth
            label={img}
            name={img}
            value={formData.images[img]}
            onChange={handleChange}
            sx={inputStyle}
          />
        ))}

        {/* Infrastructure */}
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {formData.infrastructure.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onDelete={() => handleRemoveInfrastructure(index)}
              sx={{ bgcolor: "#ccc", color: "#000" }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            fullWidth
            label="Add Infrastructure"
            value={infrastructureInput}
            onChange={(e) => setInfrastructureInput(e.target.value)}
            sx={inputStyle}
          />
          <Button variant="contained" onClick={handleAddInfrastructure}>
            Add
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>

  );
}

export default index;
