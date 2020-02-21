import express from "express";
import AuthRouter from "./models/routers/auth.router";
import bodyParser from "body-parser";
import ProductsRouter from "./models/routers/product.router";

const startServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.get("/", (req, res) => {
        return res.send(
            `<a href="https://en.wikipedia.org/wiki/Multitenancy">Gimme The Definition</a>`
        );
    });
    app.use("/auth", AuthRouter);
    app.use("/products", ProductsRouter);

    app.listen({ port: process.env.PORT || 4000 }, () => {
        console.log(
            `🚢 Server Shipped at http://localhost:${process.env.PORT || 4000}$`
        );
    });
};

startServer()
    .then()
    .catch(console.log);
