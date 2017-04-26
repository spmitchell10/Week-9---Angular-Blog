"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	firstName: String,
	lastName: String,
	blogs: [{type:Schema.Types.ObjectId, ref: 'Blog'}]

});

module.exports = mongoose.model('Author', userSchema);
