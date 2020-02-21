import { User } from "src/models/auth/user.model";

export interface IDecodedUser
    extends Pick<User, "id" | "username" | "database"> {}
