const userModels = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModels.getAllUsers();
    return res.status(200).json({
      message: "Hallo controller",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
    await userModels.createUser(body);
    res.status(201).json({
      message: "User Created!",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await userModels.updateUser(body, id);
    return res.status(200).json({
      message: "User updated!",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await userModels.deleteUser(id);
    return res.status(200).json({
      message: "Deleted!",
      user_id: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
