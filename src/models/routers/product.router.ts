import express from "express";
import {
    IDbInjectedRequest,
    DbInjectorMiddleware
} from "../../middleware/db-injector.middleware";
import { Product } from "../auth/product.model";
import { AuthenticatedMiddleware } from "../../middleware/authenticated.middleware";
const ProductsRouter = express.Router();

//Inject Middleware
ProductsRouter.use([
    AuthenticatedMiddleware as any,
    DbInjectorMiddleware as any
]);

ProductsRouter.get("/", async (req, res) => {
    const { connection } = (<IDbInjectedRequest>req).db;
    const products = await connection
        .createQueryBuilder(Product, "p")
        .getMany();
    return res.json(products);
});

export default ProductsRouter;
