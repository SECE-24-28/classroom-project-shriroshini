const mongoose = require('mongoose');

const rechargeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true,
    enum: ['Airtel', 'Jio', 'Vi', 'BSNL']
  },
  amount: {
    type: Number,
    required: true,
    min: 10
  },
  planType: {
    type: String,
    required: true,
    enum: ['Prepaid', 'Postpaid']
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Success', 'Failed']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recharge', rechargeSchema);