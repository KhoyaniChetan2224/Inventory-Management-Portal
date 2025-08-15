// controllers/reporting.controller.js
const Reporting = require("../models/reportModel");

exports.createReport = async (req, res) => {
  try {
    const { reportId, name, priority, subject, status } = req.body;

    const newReport = new Reporting({
      reportId,
      name,
      priority,
      subject,
      status
    });

    await newReport.save();
    res.status(201).json({
      success: true,
      message: "Report created successfully",
      data: newReport
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Reporting.find();
    res.status(200).json({ success: true, data: reports });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
