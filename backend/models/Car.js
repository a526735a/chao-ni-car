const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  regYear: { type: String, required: true },
  LNumber: { type: String, required: true },
  gear: "manual" | "auto",
  seat: { type: Number, required: true },
  equipment: { type: String },
  photo: {type: String },
  availFrom:  { type: Date, required: true },
  availTo: { type: Date, required: true },
  description: { type: String },
  location: {type: String, required: true},
  pricePerDay: {type: Number, required: true},
  deposit: {type: Number, required: true},

  isRented: { type: Boolean, default: false},
  _owner: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  isDeleted:  { type: Boolean, default: false},
});

mongoose.model("cars", carSchema);
