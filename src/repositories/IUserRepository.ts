import { User } from "../entities/User";

export interface IUserRepository {
    create(user: User): Promise<void>,
    login(userEmail: string): Promise<string>,
    // update(name: string): Promise<User>,
    // delete(name: string): Promise<void>,
}