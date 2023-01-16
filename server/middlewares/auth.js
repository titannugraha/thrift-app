const { tokenVerifier } = require("../helpers/jsonwebtoken");

const authToken = (req, res, next) => {
  const acces_token = req.headers.acces_token;

  if (acces_token) {
    try {
      let verify = tokenVerifier(acces_token);
      req.userData = verify;
      next();
    } catch (err) {
      res.status(401).json({
        message: "Authentication error !",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found !",
    });
  }
};

module.exports = {
  authToken,
};
