const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phonenumber: { type: Number, require: true },
  message: { type: String, require: true },
});

const messageModel = mongoose.model("message", messageSchema);

module.exports = messageModel;
