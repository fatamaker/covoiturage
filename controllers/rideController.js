const Ride=require("../models/Ride");


// Create a new ride
exports.createRide = async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).json({ success: true, message: "Ride created successfully", ride });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Create a new ride
exports.createRide = async (req, res) => {
  try {
    // Destructure the request body to get the basic fields
    const { time1, time2, location1, location2, date ,driver} = req.body;

    
   
   
    const vehicle = null; 

   
    const smoking = false;  // Default smoking preference
    const animals = false;  // Default animals preference
    const passengerCount = 1;  // Default passenger count (you could calculate this based on other data)
    const luggageSize = 'petit';  // Default luggage size (could be passed if required)

    // Create a new Ride instance with both provided and default values
    const ride = new Ride({
      time1,
      time2,
      location1,
      location2,
      smoking,
      animals,
      driver,
      vehicle,
      date,
      passengerCount,
      luggageSize,
    });

    // Save the ride to the database
    await ride.save();

    // Respond with a success message and the created ride
    res.status(201).json({
      success: true,
      message: 'Ride created successfully',
      ride,
    });
  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the ride. Please try again later.',
    });
  }
};


exports.createOrUpdateRide = async (req, res) => {
    try {
      const { driver, time1, time2, location1, location2 } = req.body;
  
      // Find a ride by the driver and the departure time (assuming one ride per driver per time)
      const ride = await Ride.findOneAndUpdate(
        { driver, time1, time2, location1, location2 }, // Search criteria
        { $set: req.body }, // Update the existing fields or insert new
        { upsert: true, new: true, setDefaultsOnInsert: true } // Create if not found
      );
  
      res.status(200).json({ success: true, message: "Ride created or updated successfully", ride });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

// Get all rides
exports.getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json({ success: true, rides });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single ride by ID

exports.getRideById = async (req, res) => {
    try {
      const ride = await Ride.findById(req.params.id);
      if (!ride) return res.status(404).json({ success: false, message: "Ride not found" });
  
      res.status(200).json({ success: true, ride });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

// Update a ride
exports.updateRide = async (req, res) => {
    try {
      const { id } = req.params;
       
        if (req.body.vehicle === "") {
            req.body.vehicle = null;
        }
      
      const ride = await Ride.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!ride) return res.status(404).json({ success: false, message: "Ride not found" });
  
      res.status(200).json({ success: true, message: "Ride updated successfully", ride });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

// Delete a ride
exports.deleteRide = async (req, res) => {
    try {
      const { id } = req.params;
  
  
  
      const ride = await Ride.findByIdAndDelete(id);
      if (!ride) return res.status(404).json({ success: false, message: "Ride not found" });
  
      res.status(200).json({ success: true, message: "Ride deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };