const moment_controller = require("../controllers/moment.controller");
const multer = require("multer");
const express = require("express");
const router = express.Router();


let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // console.log("file", file);
        callback(null, "./Uploads/");
    },
    filename: function (req, file, callback) {
        // console.log("multer file:", file);
        callback(null, file.originalname);
    }
});
let maxSize = 1000000 * 1000;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
});


router.post("/create", upload.array("multiple_image", 6), moment_controller.create);
router.get("/find", moment_controller.find);
router.delete("/delete-moment/:id", moment_controller.delete)

module.exports = router;
