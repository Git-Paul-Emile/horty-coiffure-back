import jwt from "jsonwebtoken";
const getAccessTokenSecret = () => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) {
        throw new Error("JWT secret manquant dans .env");
    }
    return secret;
};
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "1d";
export const generateToken = (payload) => {
    // Utilisation d'une fonction avec overload sûre
    return jwt.sign(payload, getAccessTokenSecret(), {
        expiresIn: ACCESS_TOKEN_EXPIRY,
    });
};
export const verifyToken = (token) => {
    return jwt.verify(token, getAccessTokenSecret());
};
//# sourceMappingURL=jwt.js.map