// routes/doctorRoutes.js
const express = require('express');
const { createDoctor, getDoctors, deleteDoctor } = require('../controllers/doctorController');
const router = express.Router();

router.post('/', createDoctor); // Create a doctor
router.get('/', getDoctors); // Get all doctors
router.delete('/:id', deleteDoctor); // Delete a doctor by ID

module.exports = router;