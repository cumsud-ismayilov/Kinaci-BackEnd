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
    const { fullName, email, role, phone  } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, email, role, phone  },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
