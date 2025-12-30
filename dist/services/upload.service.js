import cloudinary from '../config/cloudinary.js';
export const uploadImage = async (file, folder = 'horty-coiffure') => {
    try {
        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ folder, resource_type: 'image' }, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            });
            uploadStream.end(file);
        });
        return result.secure_url;
    }
    catch (error) {
        throw new Error('Erreur lors de l\'upload vers Cloudinary');
    }
};
//# sourceMappingURL=upload.service.js.map