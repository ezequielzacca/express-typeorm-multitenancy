import { config } from "./../../config";
import jwt from "jsonwebtoken";
import { User } from "./../auth/user.model";
import { getOrCreateConnection } from "./../../database/connection-handler";
import express from "express";
const AuthRouter = express.Router();

AuthRouter.post("/login", async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const em = (await getOrCreateConnection()).createEntityManager();
    const user = await em
        .createQueryBuilder(User, "u")
        .where("u.username = :username", { username })
        .andWhere("u.password = :password", { password })
        .getOne();
    if (!user) {
        return res.status(404).json({
            message: "Invalid credentials."
        });
    } else {
        return res.json({
            token: jwt.sign(
                {
                    id: user.id,
                    username: user.username,
                    database: user.database
                },

                config.secret
            )
        });
    }
});

export default AuthRouter;
