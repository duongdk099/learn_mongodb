// Import de Mongoose
const mongoose = require("mongoose");
// Création du schéma pour la collection "users"
const userSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Création du modèle pour la collection "utilisateurs"
const User = mongoose.model(User, userSchema);
