import { Pool } from "mysql2/promise";
import { User } from "../../entities/User";
import connection from "../../gateway/connection";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	private connection: Pool;
	constructor() {
		this.connection = connection;
	}

	async create(user: User): Promise<void> {
		const {id, name, email, nickName, password, admin} = user;
		const query = "INSERT INTO users (id, name, email, nick_name, password, admin) VALUES (?, ?, ?, ?, ?, ?)";
		await this.connection.execute(query, [id, name, email, nickName, password, admin]);
	}
    
	async login(userEmail: string): Promise<User> {
		const query = "SELECT email FROM users WHERE email = ?";
		const user = await this.connection.execute(query, [userEmail]);
		return user;
	}

	// async update(name: string): Promise<User> {}

	// async delete(name: string): Promise<void> {}
}