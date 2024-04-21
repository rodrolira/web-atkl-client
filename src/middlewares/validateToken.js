import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";
import e from 'express';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' })

        req.user = user
        next()
    })
}
