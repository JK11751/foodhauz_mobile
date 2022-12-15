const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    donation: [{ref: "DonationPack", type: mongoose.Schema.Types.ObjectId}],
    requestor: [{ref: "User", type: mongoose.Schema.Types.ObjectId}],
    accepted: {type: Boolean, required: true, default: false},
    delivered: {type: Boolean, required: true, default: false},
    cancelled: {type: Boolean, required: true, default: false},
    requested_date: {type: Date, required: true, default: false},
    delivered_date: {type: Date, required: true, default: false},
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("DonationRequest", requestSchema);

module.exports = Request;
