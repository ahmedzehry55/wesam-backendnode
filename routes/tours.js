/**
 * Module dependencies.
 */
const express = require('express');

/**
 * Express router.
 */
const router = express.Router();
 
/**
 * Movies controller.
 */
const controller = require('../controllers/toursController')

/**
 * Auth middleware.
 */
const auth = require('../middlewares/auth')

/**
 * Admin middleware.
 */
const admin = require('../middlewares/admin')

/**
 * Routes.
 */
router.post('/',  controller.create)
router.put('/:id',  controller.update)
router.delete('/:id',  controller.delete)

router.get('/', controller.list)
router.get('/:id', controller.find)

// router.post('/:id/reviews', auth.check, controller.addReview)
// router.get('/:id/reviews', controller.reviews)

module.exports = router;
