import express from 'express';
import { createBooking, getProfessionalBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/:professionalId', getProfessionalBookings);

export default router;
