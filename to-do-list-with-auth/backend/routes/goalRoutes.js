const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

const { protect } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(protect, goalController.getGoals)
  .post(protect, goalController.setGoal);
router
  .route('/:id')
  .put(protect, goalController.updateGoal)
  .delete(protect, goalController.deleteGoal);
// router.get('/', goalController.getGoals);
// router.post('/', goalController.setGoal);
// router.put('/:id', goalController.updateGoals);
// router.delete('/:id', goalController.deleteGoals);

module.exports = router;
