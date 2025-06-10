import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    uuid: String,
    username: String,
    hashedPassword: String,
    fullName: String,
    roles: Array,
    email: String,
});

export default mongoose.model('users', userSchema);
