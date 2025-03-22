const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RideSchema = new Schema({
  time1: { type: String, required: true },
  time2: { type: String, required: true },
  location1: { type: String, required: true },
  location2: { type: String, required: true },
  smoking: { type: Boolean, required: true },
  animals: { type: Boolean, required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
  freePlaces: { type: Number, required: true },
  driverImageUrl: { type: String, required: true },
  passengerCount: { type: Number, required: true },
  luggageSize: { type: String, enum: ["petit", "moyen", "grand"], required: true }
}, { timestamps: true });

const Ride = mongoose.model('Ride', RideSchema); 
module.exports = Ride;