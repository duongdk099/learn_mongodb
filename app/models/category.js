const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a category name"],
    unique: true,
  },
});

categorySchema.plugin(uniqueValidator);

const Category = mongoose.model("Category", categorySchema);
