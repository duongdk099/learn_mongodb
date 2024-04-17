const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: {
      validator: validateEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    validate: {
      validator: (value) => {
        // The password must not contain the word 'password', and must be at least 6 characters long, have uppercase, number and special characters
        const re =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/;
        return re.test(value);
      },
      message:
        "Password cannot contain the word 'password', and must be at least 6 characters long, have uppercase, number and special characters",
    },
  },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);
