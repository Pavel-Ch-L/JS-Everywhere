const mongoose = require('mongoose');

// Определяем схему БД
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Определяем модель Note со схемой
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;