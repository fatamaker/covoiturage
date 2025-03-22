const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    model: { type: String, required: true },
    couleur: { type: String, required: true },
    year: { type: Number, required: true },
    driverID: { type: String , required: true }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Vehicle', VehicleSchema);
  