import { config } from "./../config";
import { IDecodedUser } from "./../interfaces/auth/decoded-user.interface";
import { getOrCreateConnection } from "./../database/connection-handler";
import typeorm from "typeorm";
import express from "express";
import jwt from "jsonwebtoken";
import { IAuthenticatedRequest } from "./authenticated.middleware";

export interface IDbInjectedRequest extends IAuthenticatedRequest {
    db: { connection: typeorm.Connection };
}

export const DbInjectorMiddleware = async (
    req: IDbInjectedRequest,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        if (req.user) {
            const connection = await getOrCreateConnection(req.user.database);
            req.db = { connection };
        } else {
            const connection = await getOrCreateConnection();
            req.db = { connection };
        }
        next();
    } catch (e) {
        console.log(e);
        return res.status(401);
    }
};

export const decodeToken = async (token: string): Promise<IDecodedUser> => {
    try {
        const secretTokeSign = config.secret;
        return <IDecodedUser>jwt.verify(token, secretTokeSign);
    } catch (e) {
        throw e;
    }
};
