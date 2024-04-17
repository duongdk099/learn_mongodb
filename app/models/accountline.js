const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const accountLineSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please provide a label"],
    minlength: [2, "Label must be at least 2 characters long"],
    maxlength: [50, "Label cannot be longer than 50 characters"],
  },
  type: {
    type: String,
    required: [true, "Please provide a type"],
    enum: {
      values: ["debit", "credit"],
      message: "Type must be debit or credit",
    },
  },
  amount: {
    type: Number,
    required: [true, "Please provide an amount"],
  },
  paymentDate: {
    type: Date,
    required: [true, "Please provide a payment date"],
  },
  paymentMethod: {
    type: String,
    required: [true, "Please provide a payment method"],
    enum: {
      values: ["check", "cash", "credit", "deposit", "transfer"],
      message:
        "Payment method must be check, cash, credit, deposit or transfer",
    },
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Please provide a category"],
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "Please provide an account id"],
  },
});

accountLineSchema.plugin(uniqueValidator);
const AccountLine = mongoose.model("AccountLine", accountLineSchema);
