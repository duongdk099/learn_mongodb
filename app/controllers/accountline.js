const AccountLine = require("../models/accountLine");

exports.getAccountsLine = async (req, res) => {
  try {
    const accountLine = await AccountLine.findById(req.params.id);
    if (!accountLine) {
      return res.status(404).json({ error: "AccountLine not found" });
    }
    res.status(200).json(accountLine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAccountLinesByAccount = async (req, res) => {
  try {
    const accountLines = await AccountLine.find({
      accountId: req.params.accountId,
    });
    if (!accountLines.length) {
      return res
        .status(404)
        .json({ error: "No account lines found for this account" });
    }
    res.status(200).json(accountLines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAccountLine = async (req, res) => {
  const { label, type, amount, paymentDate, paymentMethod, category } =
    req.body;
  const accountId = req.params.AccountId; // Retrieved from the URL parameter

  try {
    const newAccountLine = new AccountLine({
      label,
      type,
      amount,
      paymentDate,
      paymentMethod,
      category,
      accountId, // Use the AccountId from the URL parameter
    });

    await newAccountLine.save();
    res.status(201).json(newAccountLine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAccountLine = async (req, res) => {
  const {
    label,
    type,
    amount,
    paymentDate,
    paymentMethod,
    category,
    accountId,
  } = req.body;

  try {
    const updatedAccountLine = await AccountLine.findByIdAndUpdate(
      req.params.id,
      {
        label,
        type,
        amount,
        paymentDate,
        paymentMethod,
        category,
        accountId,
      },
      { new: true }
    );

    if (!updatedAccountLine) {
      return res.status(404).json({ error: "AccountLine not found" });
    }
    res.status(200).json(updatedAccountLine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAccountLine = async (req, res) => {
  try {
    const deletedAccountLine = await AccountLine.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAccountLine) {
      return res.status(404).json({ error: "AccountLine not found" });
    }
    res.status(200).json({ message: "AccountLine deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
