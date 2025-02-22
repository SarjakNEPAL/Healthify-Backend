// routes/patientRoutes.js
const express = require('express');
const { createPatient, getPatients, deletePatient } = require('../controllers/patientController');
const router = express.Router();

router.post('/', createPatient); // Create a patient
router.get('/', getPatients); // Get all patients
router.delete('/:id', deletePatient); // Delete a patient by ID

module.exports = router;