import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

export class CreateUserCase {
	constructor(private userRepository: IUserRepository) {}

	execute = async (userData: ICreateUserDTO): Promise<void> => {
		const user = new User(userData);
        
		await this.userRepository.create(user);
	};
}