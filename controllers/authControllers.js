const userModel = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// user registration
exports.registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        if (!name || !email || !password || !phone || !address) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all the fields",
                error,
            })
        }
        let user = await userModel.findOne({ email: req.body.email });
        //validation
        if (user) {
            return res.status(409).send({
                success: false,
                message: "User Already Exists Please Login",
            });
        }
        // hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // saving to database
        user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Registerd Successfully",
            user,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Error In Registration API",
            error,
        })
    }
}


// user login 
exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all the fields",
                error,
            })
        }
        const user = await userModel.findOne({ email: req.body.email });
        //validation
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User Not Register Please Sign Up First",
            });
        }

        //compare password
        const comparePassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!comparePassword) {
            return res.status(401).send({
                success: false,
                message: "Invalid Credentials",
            });
        }
        const token = jwt.sign({ userId: user._id }, process.env.jwt_token, {
            expiresIn: "30d",
        });

        return res.status(200).send({
            success: true,
            message: "User Sign In Successfully",
            token,
            user
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Error In Login API",
            error,
        })
    }
}
