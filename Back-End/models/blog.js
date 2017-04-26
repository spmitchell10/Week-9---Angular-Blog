"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	title: String,
	content: String,
	author: {type:Schema.Types.ObjectId, ref: 'Author'}

});

module.exports = mongoose.model('Blog', userSchema);
