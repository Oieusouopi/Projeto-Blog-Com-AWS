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
			return Error("Algum campo está vazio");
		}
	};

	private validationName = (name: string) => {
		if (name.length <= 7) {
			return Error("nome muito curto por favor escreva um nome maior que 3 caracteres");
		}
	};

	private validationNickName = (nickName: string) => {
		if (nickName.length <= 1) {
			return Error("Apelido muito curto por favor escreva um nome maior que 1 caracteres");
		}
	};

	private validationEmail = (email: string) => {
		const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
		if (regexEmail.test(email) === false) {
			return Error("Email incorreto por favor informe um email correto");
		}
	};

	private validationPassword = (password: string) => {
		const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;
		if (regexPassword.test(password) === false) {
			return Error("Sua senha deve conter mais que 8 digitos uma letra maiuscula e minuscula e um caracter especial");
		}
	};
}