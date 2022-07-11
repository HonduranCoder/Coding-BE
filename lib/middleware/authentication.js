const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const cookie = req.cookies[process.env.COOKIE_NAME];
    //Check the httpOnly session cookie for the current user
    if (!cookie) throw new Error('You must be signed in to continue');

    //Verify the JWT stored in the cookie, the attach to each request
    const user = jwt.verify(cookie, process.env.JTW_SECRET);
    req.user = user;

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};
