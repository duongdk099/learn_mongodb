const {User} = require("../models/user");

exports.signup = async (req, res) => {
    // const { email, password } = req.body;
    // console.log(req.body, "hello");
    res.send("Hello to sign up ");
}

exports.login = async (req, res) => {
    res.send("Hello to login ");
}