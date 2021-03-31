const cloudinary = require("cloudinary").v2;
const _ = require('underscore');
const Q = require("q");

console.log("process.env.CLOUD_NAME = ", process.env.CLOUD_NAME);
function upload(file) {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    return new Q.Promise((resolve, reject) => {
        // console.log("file = ", file);
        cloudinary.uploader.upload(file, 
            { width: 500, height: 500 }, (err, res) => {
            if (err) {
                // console.log('cloudinary err:', err);
                reject(err);
            } else {
                // console.log('cloudinary res:', res);
                return resolve(res.url);
            }
        });
    });
};


module.exports.upload = upload;
