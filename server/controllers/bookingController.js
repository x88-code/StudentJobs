import Booking from '../models/Booking.js';

// @desc    Create a new booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error("Booking error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all bookings for a specific professional
export const getProfessionalBookings = async (req, res) => {
  const { professionalId } = req.params;

  try {
    const bookings = await Booking.find({ professionalId }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ message: err.message });
  }
};
