import express from 'express';
import { getProfessionals, createProfessional } from '../controllers/professionalController.js';

const router = express.Router();

// ✅ Use the controller functions
router.get('/', getProfessionals);      // fetch professionals from MongoDB
router.post('/', createProfessional);   // allow creating new professional

export default router;
