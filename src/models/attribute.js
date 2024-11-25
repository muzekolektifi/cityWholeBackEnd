const mongoose = require('mongoose');

const attributeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String }
});

module.exports = mongoose.model('Attribute', attributeSchema);