const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const accountSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: [true, "Please provide a bank name"],
  },
  customName: {
    type: String,
    required: [true, "Please provide a custom name"],
    validate: {
      validator: (value) => {
        return value.length > 3;
      },
      message: "Custom name must be at least 3 characters long",
    },
  },
  lastUpdated: {
    type: Date,
    required: [true, "Please provide a last updated date"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user id"],
  },
});

accountSchema.plugin(uniqueValidator);
const Account = mongoose.model("Account", accountSchema);
