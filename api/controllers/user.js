const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  req.user.save((err, savedUser) => {
    if (err) {
      res.status(422);
      res.json({ 'Need both username/PW fields': err.message });
      return;
    }
    res.json(savedUser);
  });
};

module.exports = {
  createUser
};
