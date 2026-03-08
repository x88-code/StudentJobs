import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Professional from '../models/Professional.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, password, service, location } = req.body;

    const existing = await Professional.findOne({ phone });
    if (existing) return res.status(400).json({ message: 'Phone already registered' });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const professional = await Professional.create({
      name,
      phone,
      passwordHash,
      service: service || '',
      location: location || '',
    });

    res.status(201).json({ message: 'Professional registered successfully', id: professional._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



// Login
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const professional = await Professional.findOne({ phone });
    if (!professional) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, professional.passwordHash);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: professional._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, professional: { id: professional._id, name: professional.name, phone: professional.phone } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

export default router;
