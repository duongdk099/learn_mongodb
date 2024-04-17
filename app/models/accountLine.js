const mongoose = require("mongoose");

const accountLineSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  description: String,
  amount: { type: Number, required: true },
  account: {type: String, required: true},
});

const AccountLine = mongoose.model("AccountLine", accountLineSchema);
