const bcrypt = require("bcrypt");

const { _createUser } = require("../modules/users.js");

const createUser = async (req, res) => {
  const { password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashPass = await bcrypt.hash(password, salt);

  const match = await bcrypt.compare(password, hashPass);

  req.body.password = hashPass;

  _createUser(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

module.exports = {
  createUser,
};
