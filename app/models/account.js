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
    maxlength: [50, "Custom name cannot be longer than 50 characters"],
  },
  lastUpdated: {
    type: Date,
    required: [true, "Please provide a last updated date"],
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user id"],
  },
});

accountSchema.pre("save", async function (next) {
  try {
    this.lastUpdated = Date.now();
    next();
  } catch (error) {
    next(error);
  }
});

accountSchema.pre("findOneAndUpdate", async function (next) {
  this.set({ lastUpdated: Date.now() });
  next();
});

accountSchema.pre("findOneAndDelete", async function (next) {
  try {
    await mongoose.model("Accountline").deleteMany({ accountId: this.getQuery()._id });
    next();
  } catch (error) {
    next(error);
  }
});

accountSchema.plugin(uniqueValidator);
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
