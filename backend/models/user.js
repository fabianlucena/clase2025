import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String,
    fullName: String,
    roles: Array,
    email: String,
});

export default mongoose.model('users', userSchema);
