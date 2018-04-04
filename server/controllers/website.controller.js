import Website from '../models/website.model';

const getWebsite = async (req, res) => {
  try {
    const data = await Website.findOne({});
    res.send(data);

  } catch (err) {
    res.send(err);
  }
};

const addWebsite = async (req, res) => {
  try {
    const newWebsite = await Website.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true
    });
    res.send(newWebsite._id);
  } catch (err) {
    res.send(err);
  }
};

const updateWebsite = async (req, res) => {
  try {
    const updatedWebsite = await Website.findOneAndUpdate({}, req.body, {new: true});
    res.send(updatedWebsite);
  } catch (err) {
    res.send(err);
  }
};

export default {getWebsite, addWebsite, updateWebsite};
