// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { patientNumber, doctorName, date, time } = req.body;

    try {
        const appointment = await Appointment.create({ patientNumber, doctorName, date, time });
        res.status(201).json({ message: 'Appointment created', appointment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        await Appointment.destroy({ where: { id } });
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};