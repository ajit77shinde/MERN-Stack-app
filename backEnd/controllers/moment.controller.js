const momentSchema = require("../models/Moment");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../config/helper").upload;
const vm = require("v-response");

exports.create = async (req, res, next) => {
    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    try {
        let urls = [];
        let multiple = async (path) => await upload(path);
        for (const file of files) {
            const { path } = file;

            const newPath = await multiple(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            let body = req.body;
            let bodyw = _.extend(body, { multiple_image: urls });
            let new_user = new momentSchema(bodyw);
            await new_user.save()
                .then(saved => {
                    return res.json(saved);
                }).catch(error => {
                    return res.json(error);
                })
        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }
    } catch (e) {
        console.log("err :", e);
        return next(e);
    }
};
exports.find = (req, res, next) => {
    momentSchema.find()
        .then(found => {
            if (!found) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, ""))
            }
            if (found) {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "", found))
            }
        })
};
exports.delete = (req, res, next) => {
    momentSchema.findByIdAndRemove(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, ""))
            }
            if (data) {
                return res.status(200)
                    .json(vm.ApiResponse(true, 200, "", data))
            }
        })
};
