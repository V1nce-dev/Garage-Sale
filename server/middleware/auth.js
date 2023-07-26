const jwt = require("jsonwebtoken");

const Verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.error(err);
                return res
                    .status(403)
                    .json({ error: "Failed to verify token", details: err.message });
            }

            req.user = { _id: user._id };
            next();
        });
    } else {
        res.status(401).json({ error: "No authorization header provided" });
    }
};

module.exports = Verify;
