import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, userId } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ message: "Bütün sahələr doldurulmalıdır!" });
    }

    const newContact = await Contact.create({ name, phone, email, userId });

    res.json({ message: "Məlumat uğurla göndərildi ", contact: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server xətası " });
  }
});


router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find(); 
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server xətası " });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ message: "Contact uğurla silindi " });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server xətası " });
  }
});


export default router;
