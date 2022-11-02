import { IUserRepository } from "../../repositories/IUserRepository";
import { IReadUserDTO } from "./interfaces/IReadUserDTO";

export default class LoginUserCase {
	constructor(private userRepository: IUserRepository) {}

	public execute = async (userData: IReadUserDTO): Promise<string> => {
		const user = await this.userRepository.login(userData.email);
		return user;
	};
}