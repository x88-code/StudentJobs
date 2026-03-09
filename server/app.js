import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Routes
import fundiRoutes from './routes/professionalRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://student-jobs-mauve.vercel.app', // Your live frontend
    'http://localhost:5173'                  // Your local frontend (Vite default)
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/professionals', fundiRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/jobs', jobRoutes);

// Root route
app.get('/', (req, res) => res.send('StudentJobs API running'));

connectDB(); // Connect to DB

export default app;
