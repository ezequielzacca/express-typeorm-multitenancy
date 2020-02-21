import { Product } from "./../models/auth/product.model";
import { User } from "./../models/auth/user.model";
import typeorm, { getConnection, createConnection } from "typeorm";
export const getOrCreateConnection = async (name?: string) => {
    let connection: typeorm.Connection;
    try {
        connection = await getConnection(name);
    } catch (e) {
        connection = await createConnection({
            name: name ?? "default",
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: name ?? "multitenancy_auth_db",
            entities: name ? [Product] : [User],
            synchronize: true
        });
    }
    return connection;
};
