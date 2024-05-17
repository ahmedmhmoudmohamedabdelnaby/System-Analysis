const User = require("../models/user-model");

checkUserAuth = async (req, res) => {
  const { username, password } = req.body;
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "username and password are required!",
    });
  }

  User.findOne({ username: username, password: password }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        err,
        message: "User is Unauthorized!",
      });
    } else {
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "User is authorized!",
      });
    }
  });
};

getAllUsers = async (req, res) => {
  await User.find((err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: "Users not found" });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

checkServiceRunning = (req, res) => {
  res.send("Hello World! - from users service");
};

register = async (req, res, next) => {
  // 1) Create user
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  // 3) Send response
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

module.exports = {
  checkUserAuth,
  checkServiceRunning,
  register,
  getAllUsers,
};
