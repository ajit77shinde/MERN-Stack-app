let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
    var async = require('async');

// Company Model
let companySchema = require('../models/Company');

// READ Company data
router.route('/').get((req, res) => {
    // console.log('get all company data')
    // companySchema.find({}, null, { limit: 25 }).exec((error, data) => {
    //     // companySchema.find().sort('CompanyId', -1).limit(10, (error, data) => {
    //     if (error) {
    //         // console.log('error = ',error)
    //         return next(error)
    //     } else {
    //         // console.log('data = ',data)
    //         res.json(data)
    //     }
    // })

    var countQuery = function (callback) {
        companySchema.count({}, function (err, count) {
            if (err) { callback(err, null) }
            else {
                callback(null, count);
            }
        })
   };

    var retrieveQuery = function (callback) {

        companySchema.find({}, null, { limit: 25 }).exec((error, data) => {
            // companySchema.find().sort('CompanyId', -1).limit(10, (error, data) => {
            if (error) {
                // console.log('error = ',error)
                // return next(error)
                callback(err, null)
            } else {
                // console.log('data = ',data)
                // res.json(data)
                callback(null, data);

            }
        })

        //        User.find({}).skip((page-1)*PAGE_LIMIT)
        //                     .limit(PAGE_LIMIT)
        //                     .exec(function(err, doc){
        //                            if(err){ callback(err, null) }
        //                            else{
        //                            callback(null, doc);
        //                            }
        //                      }
    };

    async.parallel([countQuery, retrieveQuery], function (err, results) {
        //err contains the array of error of all the functions
        //results contains an array of all the results
        //results[0] will contain value of doc.length from countQuery function
        //results[1] will contain doc of retrieveQuery function
        //You can send the results as

        // res.json({users: results[1], pageLimit: PAGE_LIMIT, page: page, totalCount: results[0]});
        res.json({ data: results[1], totalCount: results[0] });

    });
})

router.route('/filtering').post((req, res) => {
    console.log('get all company data = ', req.body)
    if (req.body.length > 0) {
        var countQuery = function (callback) {
            companySchema.find({ "IndustryType1": { $in: req.body } }, null).count({}, function (err, count) {
                if (err) { callback(err, null) }
                else {
                    callback(null, count);
                }
            })
       };

        var retrieveQuery = function (callback) {

            companySchema.find({ "IndustryType1": { $in: req.body } }, null, { limit: 100 }).exec((error, data) => {
                // companySchema.find().sort('CompanyId', -1).limit(10, (error, data) => {
                if (error) {
                    // console.log('error = ',error)
                    callback(err, null)
                    // return next(error)
                } else {
                    // console.log('data.length =  = ',data.length)
                    // res.json(data)
                    callback(null, data);
                }
            })

            //        User.find({}).skip((page-1)*PAGE_LIMIT)
            //                     .limit(PAGE_LIMIT)
            //                     .exec(function(err, doc){
            //                            if(err){ callback(err, null) }
            //                            else{
            //                            callback(null, doc);
            //                            }
            //                      }
        };

        async.parallel([countQuery, retrieveQuery], function (err, results) {
            //err contains the array of error of all the functions
            //results contains an array of all the results
            //results[0] will contain value of doc.length from countQuery function
            //results[1] will contain doc of retrieveQuery function
            //You can send the results as

            // res.json({users: results[1], pageLimit: PAGE_LIMIT, page: page, totalCount: results[0]});
            res.json({ data: results[1], totalCount: results[0] });

        });
    } else {
        var countQuery = function (callback) {
            companySchema.count({}, function (err, count) {
                if (err) { callback(err, null) }
                else {
                    callback(null, count);
                }
            })
       };

        var retrieveQuery = function (callback) {

            companySchema.find({}, null, { limit: 25 }).exec((error, data) => {
                // companySchema.find().sort('CompanyId', -1).limit(10, (error, data) => {
                if (error) {
                    // console.log('error = ',error)
                    // return next(error)
                    callback(err, null)
                } else {
                    // console.log('data = ',data)
                    // res.json(data)
                    callback(null, data);

                }
            })

            //        User.find({}).skip((page-1)*PAGE_LIMIT)
            //                     .limit(PAGE_LIMIT)
            //                     .exec(function(err, doc){
            //                            if(err){ callback(err, null) }
            //                            else{
            //                            callback(null, doc);
            //                            }
            //                      }
        };

        async.parallel([countQuery, retrieveQuery], function (err, results) {
            //err contains the array of error of all the functions
            //results contains an array of all the results
            //results[0] will contain value of doc.length from countQuery function
            //results[1] will contain doc of retrieveQuery function
            //You can send the results as

            // res.json({users: results[1], pageLimit: PAGE_LIMIT, page: page, totalCount: results[0]});
            res.json({ data: results[1], totalCount: results[0] });

        });

    }

})
router.route('/unique-in-industry').get((req, res) => {
    companySchema.find().distinct('IndustryType1', (error, data) => {
        if (error) {
            // console.log('error = ',error)
            return next(error)
        } else {
            // console.log('data = ',data)
            res.json(data)
        }

    })
})


// create companys
router.route('/create-companys').post((req, res, next) => {
    // console.log('req.body = ', req.body)
    companySchema.insertMany(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            // console.log(data)
            res.json(data)
        }
    })
});
module.exports = router;

 // companySchema.find({"IndustryType1": {$in : req.body}}, null, {limit: 100}).exec( (error, data) =>{
        //     // companySchema.find().sort('CompanyId', -1).limit(10, (error, data) => {
        //         if (error) {
        //             // console.log('error = ',error)
        //             return next(error)
        //         } else {
        //             console.log('data.length =  = ',data.length)
        //             res.json(data)
        //         }
        //     })