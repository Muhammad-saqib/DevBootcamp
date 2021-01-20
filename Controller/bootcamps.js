const asyncHandler = require('../middlewear/asyncHandler')
const Bootcamp = require('../models/Bootcamp')

//@desc Get all bootcamps
//@route  Get /api/vi/bootcamps
//@access Public

exports.getBootcamps = (req, res, next) => {
     res.status(200).send({ success: true, msg: 'Show All bootcamp' })

}

//@desc Get all bootcamps
//@route  Get /api/vi/bootcamps/:id
//@access Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
     const bootcamp = await Bootcamp.findById(req.params.id);

     if (!bootcamp) {
          return next(
               new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
          );
     }

     res.status(200).json({ success: true, data: bootcamp });

})


//@desc Create new bootcamps
//@route  Post /api/vi/bootcamps
//@access Private

exports.createBootcamps = asyncHandler(async (req, res, next) => {
     const bootcamp = await Bootcamp.create(req.body);

     res.status(200).send({ success: true, data: bootcamp })

})



//@desc Update new bootcamps
//@route  Post /api/vi/bootcamps/:id
//@access Private

exports.updateBootcamps = asyncHandler(async (req, res, next) => {
     let bootcamp = await Bootcamp.findById(req.params.id);

     if (!bootcamp) {
          return next(
               new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
          );
     }


     bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
     });

     res.status(200).json({ success: true, data: bootcamp });




})



//@desc Delete new bootcamps
//@route  Post /api/vi/bootcamps/:id
//@access Private

exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
     const bootcamp = await Bootcamp.findById(req.params.id);

     if (!bootcamp) {
          return next(
               new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
          );
     }

     bootcamp.remove();

     res.status(200).json({ success: true, data: {} });

})