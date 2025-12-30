import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
//import userRoute from "../routes/user.route.js";
import { StatusCodes } from "http-status-codes";






const app = express();


// Configuration CORS
const corsOptions = {
 origin: "http://localhost:5173",
 credentials: true,
};


app.use(cors(corsOptions));
// Parser JSON et cookies
app.use(express.json());
app.use(cookieParser());


// Servir les fichiers statiques du dossier uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));


// Routes
//app.use("/api/users", userRoute);


// Middleware pour routes non trouvées
app.use((req, res) => {
 res.status(StatusCodes.NOT_FOUND).json({ message: "Route non trouvée" });
});


export default app;