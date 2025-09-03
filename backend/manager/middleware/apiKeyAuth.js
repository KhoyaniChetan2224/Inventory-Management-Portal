// middleware/apiKeyAuth.js
export const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ success: false, message: "Invalid API Key" });
  }
  next();
};
