const { AccountLine } = require("../models/accountLine");

exports.getAccountsLine = async (req, res) => {
  res.send("Hello to get account line ");
};
exports.createAccountLine = async (req, res) => {
  res.send("Hello to create account line ");
};

exports.updateAccountLine = async (req, res) => {
  res.send("Hello to update account line ");
};

exports.deleteAccountLine = async (req, res) => {
  res.send("Hello to delete account line ");
};
