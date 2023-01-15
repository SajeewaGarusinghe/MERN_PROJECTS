const express = require('express');
const bootcampsControllers = require('../controllers/bootcampControllers');

const router = express.Router();

//@route - /api/v1/bootcamps/
router
  .route('/')
  .get(bootcampsControllers.getAllBootcamps)
  .post(bootcampsControllers.createNewBootcamp);

//@route - /api/v1/bootcamps/someId
router
  .route('/:id')
  .put(bootcampsControllers.updateBootcampById)
  .delete(bootcampsControllers.deleteBootcampById);

module.exports = router;
