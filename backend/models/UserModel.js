import mongoose from "mongoose";

const User = mongoose.Schema({
	fullname: { type: String, required: true },
	username: { type: String, required: true },
	role: { type: String, required: false },
});

export default mongoose.model('Users', User);