const express = require('express');
const messegeTest = require('./message.test');

const router = express.Router();

router.get(/test(\/\*)*/gi, messegeTest);
router.post(/test(\/\*)*/gi, messegeTest);
router.put(/test(\/\*)*/gi, messegeTest);
router.delete(/test(\/\*)*/gi, messegeTest);


module.exports = router;