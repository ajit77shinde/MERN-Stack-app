const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dqhg5acpy',
    api_key: '886883797229767',
    api_secret: "it's a secret api ofcourse"
});

exports.uploads = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        }, { resource_type: "auto" })
    })
}