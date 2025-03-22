const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");

// Routes for CRUD operations

router.post("/", rideController.createRide);
router.post("/createOrUpdateRide", rideController.createOrUpdateRide);
router.get("/", rideController.getAllRides);
router.get("/:id", rideController.getRideById);
router.put("/update/:id", rideController.updateRide);
router.delete("/delete/:id", rideController.deleteRide);

module.exports = router;
