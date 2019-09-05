import { Query } from "mongoose";

export interface IEntityResolver<T> {
    main: () => Promise<Array<T>>;
    relations: {
        [functionName: string]: (parent: T) => Promise<any> | Query<any>
    };
    mutations: {
        [functionName: string]: (_: any, args: any) => Promise<any> | Query<any>
    };

}