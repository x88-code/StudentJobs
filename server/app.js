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
// In server/app.js
app.use(cors({
  origin: [
    'https://student-jobs-mauve.vercel.app', 
    'https://student-jobs-git-main-0xericks-projects.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/professionals', fundiRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Root route
app.get('/', (req, res) => res.send('StudentJobs API running'));

connectDB(); // Connect to DB

export default app;
