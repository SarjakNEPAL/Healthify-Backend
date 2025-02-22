// controllers/patientController.js
const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
    const { name, phone, disease, address } = req.body;

    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ where: { phone } });
    if (existingPatient) {
        return res.status(400).json({ message: 'Patient with this phone number already exists' });
    }

    try {
        const patient = await Patient.create({ name, phone, disease, address });
        res.status(201).json({ message: 'Patient created', patient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePatient = async (req, res) => {
    const { id } = req.params;
    try {
        await Patient.destroy({ where: { id } });
        res.json({ message: 'Patient deleted' });
    } catch (error) {
// controllers/patientController.js
res.status(500).json({ error: error.message });
}
};