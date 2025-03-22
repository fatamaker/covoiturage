const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

// Create a new vehicle
router.post("/", vehicleController.createVehicle);

// Get all vehicles
router.get("/", vehicleController.getAllVehicles);

// Get all vehicles of a specific driver by driver (String)
router.get("/driver/:driverID", vehicleController.getAllVehiclesByDriver);

// Get a single vehicle by ID
router.get("/:id", vehicleController.getVehicleById);

// Update a vehicle by ID
router.put("/update/:id", vehicleController.updateVehicle);

// Delete a vehicle by ID
router.delete("/delete/:id", vehicleController.deleteVehicle);

module.exports = router;