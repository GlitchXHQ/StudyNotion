const cloudinary = require('cloudinary').v2
const streamifier=require("streamifier")

exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.uploadVideoToCloudinary = async (fileBuffer, folder)=>{
    return new Promise((resolve,reject)=>{
        const options={
            resource_type:"video",
            folder:folder || "default"
        };
        const uploadStream = cloudinary.uploader.upload_stream(options,(err,result)=>{
            if(err) return reject(err)
            resolve(result)    
        })
        streamifier.createReadStream(fileBuffer).pipe(uploadStream)
    })
}