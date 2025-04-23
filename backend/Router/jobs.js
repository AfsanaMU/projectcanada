const express = require("express");
const router = express.Router();
const Job = require("../models/Job");  // Assuming you have a Job model

// POST job
router.post("/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job posted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
