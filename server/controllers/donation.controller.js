const asyncHandler = require("express-async-handler");
const Donation = require("../models/donation.model");

const createDonation = asyncHandler(async (req, res) => {
  const {foods, location, creator, approved, cancelled, requested} = req.body;

  if (!foods || !location || !creator) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const newDonation = {
    foods,
    location,
    creator,
    approved,
    cancelled,
    requested,
  }
  try {
    var donation = await Donation.create(newDonation);
    donation = await donation.populate("creator", "name email profile_pic")
    if (donation) {
        res.status(201).json({
            _id: donation._id,
            foods: donation.foods,
            creator: donation.creator,
            approved: donation.approved,
            cancelled: donation.cancelled,
            requested: donation.requested
        });
    }

} catch (error) {
    res.status(400);
    throw new Error("Failed to create the donation");
  }
});

// /api/user?search=janedoe
const allUserDonations = asyncHandler(async (req, res) => {
    try {
    const donations = await Donation.find({creator: req.params.user_id})
    .populate("creator", "name profile_pic email")
   
    res.status(200).json(donations);
  } catch (error) {

    res.status(400);
    throw new Error("Failed to get the donations");
  }
});

const allDonations = asyncHandler(async (req, res) => {
    try {
    const donations = await Donation.find({},{},{lean:true})
    .populate("creator", "name profile_pic email")
   
    res.status(200).json(donations);
  } catch (error) {

    res.status(400);
    throw new Error("Failed to get the donations");
  }
});

const getDonation = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    console.log("donation id parameter not sent with request");
    return res.sendStatus(400);
  }
  try {
    var donation = await Donation.findOne({_id: req.params.id});
   
    if (donation) {
      res.status(200).json(donation);
    } else {
      return res.status(404).send("cannot find donation with that id");
    }
  } catch (error) {
    return res.status(500).send("cannot find donation with that id");
  }
});

const deleteDonation = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    console.log("donation id parameter not sent with request");
    return res.sendStatus(400);
  }
  try {
    const donation = await Donation.findByIdAndDelete({_id: req.params.id});
    if (donation) {
      return res.status(201).json({
        message: "Donation deleted",
      });
    } else {
      return res.status(400).json({
        message: "Something went wrong when deleting the donation",
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error("Failed to delete the donation");
  }
});

const updateDonation = asyncHandler(async (req, res, next) => {
  try {
    const donation = await Donation.findById({_id: req.params.id});
    if (donation) {
      const willBeUpdated = await Donation.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {lean: true, new: true}
      );
      if (willBeUpdated) {
        return res.status(201).json({
          message: "Donation updated",
        });
      } else {
        return res.status(400).json({
          message: "Something went wrong when updating the task",
        });
      }
    } else {
      return res.status(404).json({
        message: "No record found",
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error("Failed to update the donation");
  }
});

module.exports = {
  createDonation,
  allDonations,
  allUserDonations,
  deleteDonation,
  updateDonation,
  getDonation,
};
