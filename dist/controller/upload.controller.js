import multer from 'multer';
import { uploadImage } from '../services/upload.service.js';
const storage = multer.memoryStorage(); // Stocke en mémoire pour Cloudinary
const upload = multer({ storage });
export const uploadImageHandler = [
    upload.single('image'), // 'image' est le nom du champ dans le formulaire
    async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'Aucun fichier fourni' });
            }
            const url = await uploadImage(req.file.buffer, req.body.folder || 'default');
            res.json({ url });
        }
        catch (error) {
            res.status(500).json({ error: 'Erreur d\'upload' });
        }
    },
];
//# sourceMappingURL=upload.controller.js.map