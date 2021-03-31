let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// user Model
const userSchema = require('../models/user');

// CREATE user
router.route('/create-user').post((req, res, next) => {
  console.log('req.body = ', req.body)
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      // res.json(data)
      res.json({msg: "User created Successfully!!"})
    }
  })
});

// Update user
router.route('/update-user').put((req, res, next) => {
  userSchema.updateOne({ email: req.body.email }, { password: req.body.password }, (error, data) => {
    if (error) {
      console.log("error = =====", error)
      return next(error);
    } else {
      console.log("data = ", data);
      if(data.nModified == 0){
        res.json({msg: "We cannot find an account with that email address"})
      }else if(data.nModified == 1){
        res.json({msg: "user updated successfully !"})
      }else {
        res.json({msg: "something went wrong please try again."})
      }
      // res.json(data)
    }
  })
})

// READ users
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single user
router.route('/edit-user/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
  console.log("req.params.id = ", req.params.id)
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;