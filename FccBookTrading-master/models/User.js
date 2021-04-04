const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	firstName: String,
	lastName:String,
	phone: String,
	email: String,
	address: {
    country: String,
    city: String,
    state: String,
	},
	firstLogin:{type: Boolean,default:true},
	google: {
		id: String
	},
	github: {
		id: String
	},
	twitter: {
		id: String,
	}
})

mongoose.model('users', userSchema)