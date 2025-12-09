import express from "express";
import User from "../models/users.js";


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, role } = req.body;

    console.log("Updating user:", req.body); // debug üçün

    // MongoDB-də düzgün field adları ilə update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, email, phone, role },
      { new: true, runValidators: true } // runValidators: true → schema qaydalarına riayət edir
    );

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
