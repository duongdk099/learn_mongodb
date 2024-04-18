const {Account} = require("../models/account");

exports.getAccounts = async (req, res) => {
    res.send("Hello to get accounts ");
}

