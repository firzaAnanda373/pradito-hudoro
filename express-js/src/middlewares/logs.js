const logUsers = (req, res, next) => {
  console.log("test middleware");
  next();
};

module.exports = logUsers;
