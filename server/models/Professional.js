import mongoose from 'mongoose';

const professionalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Professional', professionalSchema);
