const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
  to: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  from: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  title: {
      type: Schema.Types.ObjectId,
      ref: "Note"
  },
  body: {
      type: Schema.Types.ObjectId,
      ref: "Note"
  }
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;
