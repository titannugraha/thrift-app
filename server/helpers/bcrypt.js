const bcrypt = require('bcrypt');
const saltRound = 7;

const encrypt = (data) => {
  return bcrypt.hashSync(data, saltRound);
};

const decrypt = (data, pwdHash) => {
  return bcrypt.compareSync(data, pwdHash);
};

module.exports = {
  encrypt,
  decrypt,
};
