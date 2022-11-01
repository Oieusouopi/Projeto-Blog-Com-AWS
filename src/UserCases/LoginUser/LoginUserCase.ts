import { IUserRepository } from "../../repositories/IUserRepository";
import { IReadUserDTO } from "./interfaces/IReadUserDTO";
import { User } from "../../entities/User";

export default class ReadUserCase {
	constructor(private userRepository: IUserRepository) {}

	public execute = async (userData: IReadUserDTO): Promise<User> => {
		const user = await this.userRepository.login(userData.email);
		return user;
	};
}