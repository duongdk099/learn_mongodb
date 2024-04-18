const {Account} = require("../models/account");

exports.getAccounts = async (req, res) => {
    res.send("Hello to get accounts ");
}

exports.createAccount = async (req, res) => {
    res.send("Hello to create account ");
}

exports.updateAccount = async (req, res) => {
    res.send("Hello to update account ");
}

exports.deleteAccount = async (req, res) => {
    res.send("Hello to delete account ");
}