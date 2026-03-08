import Professional from '../models/Professional.js';
import bcrypt from 'bcryptjs';

// @desc    Get all professionals
export const getProfessionals = async (req, res) => {
  try {
    // never send password hashes to clients
    const professionals = await Professional.find().select('-passwordHash').sort({ createdAt: -1 });
    res.json(professionals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new professional (for admin or seed scripts)
export const createProfessional = async (req, res) => {
  const { name, service, phone, location, password } = req.body;

  try {
    const existing = await Professional.findOne({ phone });
    if (existing) return res.status(400).json({ message: 'Phone already exists' });

    const professionalData = { name, service, phone, location };
    if (password) {
      // if a password is provided hash it, otherwise leave blank
      const salt = await bcrypt.genSalt(10);
      professionalData.passwordHash = await bcrypt.hash(password, salt);
    } else {
      professionalData.passwordHash = '';
    }

    const professional = new Professional(professionalData);
    const saved = await professional.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
