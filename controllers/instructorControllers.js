const userModel = require("../models/authModel"); 
const instructorModel = require("../models/instructorModel"); 
exports.becomeinstructorController = async (req, res) => {
    try {
        const { name, email, phone, address, bio, subjects, experience, qualifications } = req.body;
        if (!name || !email || !phone || !address || !bio || !subjects || !qualifications || !experience) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all the fields",
            });
        }
        
        // Check if an instructor with the same email already exists
        const existingInstructor = await instructorModel.findOne({ email });
        if (existingInstructor) {
            return res.status(409).send({
                success: false,
                message: "Instructor Already Exists. Please Login",
            });
        }

        // Check if a user with the same email exists in userModel
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).send({
                success: false,
                message: "User with this email does not exist. Please create an account first.",
            });
        }

        // Create a new instructor instance
        const newInstructor = new instructorModel({
            name,
            email,
            phone,
            address,
            bio,
            subjects,
            experience,
            qualifications,
        });

        // Save the new instructor to the database
        await newInstructor.save();

        return res.status(201).send({
            success: true,
            message: "Successfully Applied for Instructor",
            user: newInstructor,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error In Become Instructor API",
            error: error.message,
        });
    }
};
