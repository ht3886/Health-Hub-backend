//author: Vidip Malhotra
const express = require('express');
const router = express.Router();
const InsuranceController = require('../controllers/InsuranceController');

router.get('/', InsuranceController.getAll);
router.get('/specific/:user_id',InsuranceController.getspecificInsurance);
module.exports = router;
