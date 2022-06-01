const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
	ID: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
		unique: true,
	},
	PhoneNumber: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
	},
	userRole: {
		type: String,
		required: true,
	},

});

module.exports = User = mongoose.model("user", UserSchema);