import { CreateUserCase } from "./CreateUserCase";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

export class ValidationUserBody {
	constructor(private createUserCase: CreateUserCase) {}
	
	public execute = async (userData: ICreateUserDTO) => {
		const { name, nickName, password, email, admin } = userData;
		this.validUserFields(userData);
		this.validationName(name);
		this.validationNickName(nickName);
		await this.createUserCase.execute(userData);
	};

	private validUserFields = (userData: ICreateUserDTO) => {
		const { name, nickName, password, email, admin } = userData;
		if (!name && nickName && password && email && admin) {
			return Error("Some field is empty");
		}
	};

	private validationName = (name: string) => {
		if (name.length <= 7) {
			return Error("name is too short please enter a name longer than 6 characters");
		}
	};

	private validationNickName = (nickName: string) => {
		if (nickName.length <= 3) {
			return Error("nickName is too short please enter a name longer than 3 characters");
		}
	};
}