const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the "Authorization" header exists
    if (!req.headers["authorization"]) {
      return res.status(403).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.jwt_token, (err, decode) => {
      if (err) {
        // Handle token verification errors
        console.error(err);
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            success: false,
            message: "Token expired",
          });
        } else {
          return res.status(401).json({
            success: false,
            message: "Invalid token",
          });
        }
      } else {
        // Log decoded token payload
        console.log(decode);
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
