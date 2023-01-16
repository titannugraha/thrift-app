const jwt = require("jsonwebtoken");
const secretCode = "secret";

const tokenGenerator = (data) => {
  const { id, name } = data;
  return jwt.sign(
    {
      id,
      name,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data,secretCode)
};

module.exports = {
  tokenVerifier,
  tokenGenerator,
};
