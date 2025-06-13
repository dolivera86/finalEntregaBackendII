import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  lastPassword: String
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
