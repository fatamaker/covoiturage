const Vehicle = require("../models/Vehicle");
const mongoose = require("mongoose");

// Create a new vehicle
exports.createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json({ success: true, message: "Vehicle created successfully", vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ success: true, vehicles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all vehicles of a specific driver by driverId (assuming driver is a String)
exports.getAllVehiclesByDriver = async (req, res) => {
  try {
    const { driver } = req.params;

    // Find all vehicles associated with the driver
    const vehicles = await Vehicle.find({ driver });

    res.status(200).json({ success: true, vehicles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle not found" });

    res.status(200).json({ success: true, vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle not found" });

    res.status(200).json({ success: true, message: "Vehicle updated successfully", vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle not found" });

    res.status(200).json({ success: true, message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};