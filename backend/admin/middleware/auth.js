const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const secretKey = process.env.JWT_SECRET || 'JWT_SECRET';
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // attach user info to request
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token." });
  }
};

module.exports = authenticate;
