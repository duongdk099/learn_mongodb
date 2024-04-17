const accountSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  customName: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
