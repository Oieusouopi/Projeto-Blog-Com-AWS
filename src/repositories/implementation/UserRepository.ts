import { Pool } from "mysql2/promise";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	private connection: Pool;
	constructor(connection: Pool) {
		this.connection = connection;
	}

	async create(user: User): Promise<void> {
		const {name, email, nickName, password, admin} = user;
		const query = "INSERT INTO Users (name, email, nick_name, password, admin) VALUES (?, ?, ?, ?, ?)";
		await this.connection.execute(query, [name, email, nickName, password, admin]);
	}
    
	// async read(name: string): Promise<User> {}

	// async update(name: string): Promise<User> {}

	// async delete(name: string): Promise<void> {}
}