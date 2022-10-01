const mongose = require("mongoose");
const Schema = mongose.Schema;

//declarando el modelo para el usuario
const UserSchema = Schema({ 
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
    active: Boolean
});

module.exports = mongose.model("User", UserSchema);