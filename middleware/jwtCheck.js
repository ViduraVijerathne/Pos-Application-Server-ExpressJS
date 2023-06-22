const jwt = require('jsonwebtoken');
require('dotenv').config();


// Middleware function to check JWT
function checkJwt(req, res, next) {
  // Get the JWT from the Authorization header
  const token = req.headers.authorization;
  console.log("Request Token is :",token)

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify and decode the JWT
    const decoded = jwt.verify(token, process.env.API_SECRET_KEY);

    // Attach the decoded token to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Token verification failed
    return res.status(403).json({ error: 'Invalid token' });
  }
}

module.exports = checkJwt;