//@desc Get all bootcamps
//@route  Get /api/vi/bootcamps
//@access Public

exports.getBootcamps = (req, res, next) => {

     res.status(200).send({ success: true, msg: 'Show All bootcamp' })

}

//@desc Get all bootcamps
//@route  Get /api/vi/bootcamps/:id
//@access Public

exports.getBootcamp = (req, res, next) => {

     res.status(200).send({ success: true, msg: `Get bootcamp ${req.params.id}` })

}


//@desc Create new bootcamps
//@route  Post /api/vi/bootcamps
//@access Private

exports.createBootcamps = (req, res, next) => {

     res.status(200).send({ success: true, msg: `Create Bootcamp` })

}



//@desc Update new bootcamps
//@route  Post /api/vi/bootcamps/:id
//@access Private

exports.updateBootcamps = (req, res, next) => {

     res.status(200).send({ success: true, msg: `update bootcamp ${req.params.id}` })

}



//@desc Delete new bootcamps
//@route  Post /api/vi/bootcamps/:id
//@access Private

exports.deleteBootcamps = (req, res, next) => {

     res.status(200).send({ success: true, msg: `delete bootcamp ${req.params.id}` })

}