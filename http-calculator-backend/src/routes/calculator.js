const express = require('express');
const router = express.Router();
//const CalculatorController = require('../controllers/calculatorController');

const calculatorController = require('../controllers/calculatorController');

router.get('/add', calculatorController.add);
router.post('/add', calculatorController.add);
router.get('/subtract', calculatorController.subtract);
router.post('/subtract', calculatorController.subtract);
router.get('/multiply', calculatorController.multiply);
router.post('/multiply', calculatorController.multiply);
router.get('/divide', calculatorController.divide);
router.post('/divide', calculatorController.divide);

module.exports = router;