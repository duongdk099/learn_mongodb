const Account = require("../models/account");
const User = require("../models/user");
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.auth.userId });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAccount = async (req, res) => {
  const { bankName, customName } = req.body;

  try {
    const newAccount = new Account({
      bankName: bankName,
      customName: customName,
      userId: req.auth.userId,
    });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAccount = async (req, res) => {
  const { id } = req.params;
  const { bankName, customName } = req.body;
  try {
    const updateAccount = await Account.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          bankName: bankName,
          customName: customName,
        },
      }
    );
    if (!updateAccount) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json(updateAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAccount = await Account.findOneAndDelete({ _id: id });
    if (!deletedAccount) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json(deletedAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
