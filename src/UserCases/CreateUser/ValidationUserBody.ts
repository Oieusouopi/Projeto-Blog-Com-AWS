import { CreateUserCase } from "./CreateUserCase";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

export class ValidationUserBody {
	constructor(private createUserCase: CreateUserCase) {}

	public execute = async (userData: ICreateUserDTO) => {
		await this.createUserCase.execute(userData);
	};
}