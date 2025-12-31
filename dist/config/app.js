import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";
import healthRoute from "../routes/health.route.js";
import uploadRoute from "../routes/upload.route.js";
import adminSettingsRoute from "../routes/adminSettings.route.js";
import appointmentSettingsRoute from "../routes/appointmentSettings.route.js";
import categoryRoute from "../routes/category.route.js";
import feedbackRoute from "../routes/feedback.route.js";
import newsRoute from "../routes/news.route.js";
import partnerRoute from "../routes/partner.route.js";
import productRoute from "../routes/product.route.js";
import realizationRoute from "../routes/realization.route.js";
import serviceRoute from "../routes/service.route.js";
import testimonialRoute from "../routes/testimonial.route.js";
import usefulInfoRoute from "../routes/usefulInfo.route.js";
import userRoute from "../routes/user.route.js";
import { AppError } from "../config/utils/AppError.js";
const app = express();
const allowedOrigins = [
    process.env.FRONT_URL || 'http://localhost:8080',
    'http://localhost:5173', // Vite default
    'http://localhost:8080',
    'https://horty-coiffure-front.vercel.app/' // URL de production Vercel
];
// Configuration CORS
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., curl, mobile apps)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error('CORS policy: origin not allowed'), false);
    },
    credentials: true,
};
app.use(cors(corsOptions));
// Parser JSON et cookies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
// Servir les fichiers statiques du dossier uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
// Routes
app.use('/api/health', healthRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/admin-settings', adminSettingsRoute);
app.use('/api/appointment-settings', appointmentSettingsRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/feedbacks', feedbackRoute);
app.use('/api/news', newsRoute);
app.use('/api/partners', partnerRoute);
app.use('/api/products', productRoute);
app.use('/api/realizations', realizationRoute);
app.use('/api/services', serviceRoute);
app.use('/api/testimonials', testimonialRoute);
app.use('/api/useful-infos', usefulInfoRoute);
app.use('/api/users', userRoute);
// Middleware pour routes non trouvées
app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Route non trouvée" });
});
// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err);
    // Gestion des erreurs Prisma (qui ont 'code' et 'meta')
    if ('code' in err && typeof err.code === 'string') {
        switch (err.code) {
            case 'P2002':
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: `Conflit unique sur le champ: ${err.meta?.target || 'inconnu'}`
                });
            case 'P2025':
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Ressource non trouvée' });
            default:
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erreur de base de données inconnue' });
        }
    }
    // Gestion des AppError et autres erreurs
    const statusCode = (err instanceof AppError) ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Erreur interne du serveur';
    res.status(statusCode).json({ message });
});
export default app;
//# sourceMappingURL=app.js.map