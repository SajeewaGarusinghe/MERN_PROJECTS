const Bootcamp = require('../models/Bootcamp');

exports.getAllBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
};
exports.createNewBootcamp = (req, res, next) => {
  res.send('create new bootcamp');
};
exports.updateBootcampById = (req, res, next) => {
  res.send('update bootcamp id');
};
exports.deleteBootcampById = (req, res, next) => {
  res.send('delete bootcamp by id');
};
