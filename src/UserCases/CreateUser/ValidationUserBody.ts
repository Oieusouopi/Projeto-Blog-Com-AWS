import { ErrorTypes } from "../utils/ErrorCatalog";
import { CreateUserCase } from "./CreateUserCase";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

export class ValidationUserBody {
	constructor(private createUserCase: CreateUserCase) {}
	
	public execute = async (userData: ICreateUserDTO) => {
		const { name, nickName, password, email } = userData;
		this.validUserFields(userData);
		this.validationName(name);
		this.validationNickName(nickName);
		this.validationEmail(email);
		this.validationPassword(password);
		await this.createUserCase.execute(userData);
	};

	private validUserFields = (userData: ICreateUserDTO) => {
		const { name, nickName, password, email, admin } = userData;
		if (name && nickName && password && email && admin) {
			throw Error(ErrorTypes.fieldEmpty);
		}
	};

	private validationName = (name: string) => {
		if (name.length <= 3) {
			throw Error(ErrorTypes.nameSize);
		}
	};

	private validationNickName = (nickName: string) => {
		if (nickName.length <= 1) {
			throw Error(ErrorTypes.nickNameSize);
		}
	};

	private validationEmail = (email: string) => {
		const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
		if (regexEmail.test(email) === false) {
			throw Error(ErrorTypes.emailInvalid);
		}
	};

	private validationPassword = (password: string) => {
		const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;
		if (regexPassword.test(password) === false) {
			throw Error(ErrorTypes.passwordInvalid);
		}
	};
}