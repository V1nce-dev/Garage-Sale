const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Both fields are required" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ username, password });
        await user.save();

        const token = createToken(user._id);

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Error in registration" });
    }
};

const authenticate = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Both fields are required" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Authentication failed. User not found." });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Authentication failed. Invalid password." });
        }

        const token = createToken(user._id);

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Error in authentication", error: error.message });
    }
};

module.exports = {
    register,
    authenticate,
};
