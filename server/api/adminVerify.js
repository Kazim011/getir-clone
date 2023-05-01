const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Giriş yapmanız gerek" });
  }
  try {
    const decoded = jwt.verify(token, "shh");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token geçersizdir" });
  }
};
module.exports = verifyToken;
