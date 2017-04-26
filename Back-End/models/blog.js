"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	title: String,
	content: String,
	author: {Schema.Types.ObjectID, ref: 'Author'}

});

module.exports = mongoose.model('Blog', userSchema);
