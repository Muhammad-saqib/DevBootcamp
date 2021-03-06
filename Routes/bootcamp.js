const express = require('express');
const router = express.Router();
const {
     getBootcamp,
     getBootcamps,
     updateBootcamps,
     deleteBootcamps,
     createBootcamps
} = require('../Controller/bootcamps');

console.log('route');

router.route('/')
     .get(getBootcamps)
     .post(createBootcamps);

router.route('/:id')
     .get(getBootcamp)
     .put(updateBootcamps)
     .delete(deleteBootcamps);

module.exports = router;
