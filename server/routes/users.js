import express from "express";
import User from "../models/users.js";

const router = express.Router();

// GET /api/users → bütün istifadəçiləri gətir
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // password göstərməyək
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
    const { fullName, email, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, email, role },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
