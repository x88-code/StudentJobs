import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Coding', 'Design', 'Writing', 'Assignments', 'Data Entry'],
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'open',
    enum: ['open', 'assigned', 'completed', 'cancelled'],
  },
  applicants: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);
