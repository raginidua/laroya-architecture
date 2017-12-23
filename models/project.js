const mongoose     = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  images: [{ type: String, trim: true }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
