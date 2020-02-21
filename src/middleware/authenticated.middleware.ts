import { IDecodedUser } from "./../interfaces/auth/decoded-user.interface";
import express from "express";
import { decodeToken } from "./db-injector.middleware";

export interface IAuthenticatedRequest extends express.Request {
    user: IDecodedUser;
}
export const AuthenticatedMiddleware = async (
    req: IAuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
) => {
    //Bearer <TOKEN_HERE>

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401);
    }
    req.user = await decodeToken(token);
    console.log("user: ", req.user);
    next();
};
