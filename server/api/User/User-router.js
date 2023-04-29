const router = require("express").Router();
const jwt = require("../userVerify");
const User = require("./User-model");
router.get("/getuser", jwt, async (req, res, next) => {
  const data = await User.getFilterUser({ user_id: req.user.user_id });
  return res.status(200).json(data);
});

module.exports = router;
