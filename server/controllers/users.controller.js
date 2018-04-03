import User from '../models/user.model';

const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);

  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id});
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

const addUser = async (req, res) => {
  try {
    const userToAdd = new User(req.body);
    const addedUser = await userToAdd.save();
    res.send(addedUser);
  } catch (err) {
    res.send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {new: true});
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

const removeUser = async (req, res) => {
  try {
    const removed = await User.remove({_id: req.params.id});
    res.send(`Removed user id: ${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export default {getAll, getById, addUser, updateUser, removeUser};
