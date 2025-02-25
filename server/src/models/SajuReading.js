const mongoose = require('mongoose');

const sajuReadingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  introduction: String,
  analysis: String,
  concernAdvice: String,
  todayAdvice: String,
  dominantElement: String,
  elements: {
    wood: Number,    // 목
    fire: Number,    // 화
    earth: Number,   // 토
    metal: Number,   // 금
    water: Number    // 수
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SajuReading', sajuReadingSchema); 