const mongoose = require('mongoose');

const rechargePlanSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  validity: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true,
    enum: ['Airtel', 'Jio', 'Vi', 'BSNL']
  },
  planType: {
    type: String,
    required: true,
    enum: ['Prepaid', 'Postpaid']
  },
  benefits: {
    data: { type: String, default: '' },
    calls: { type: String, default: '' },
    sms: { type: String, default: '' }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RechargePlan', rechargePlanSchema);