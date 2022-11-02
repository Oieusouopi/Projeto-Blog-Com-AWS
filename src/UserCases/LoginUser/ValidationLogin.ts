import { IReadUserDTO } from "./interfaces/IReadUserDTO";
import LoginUserCase from "./LoginUserCase";

export default class ValidationLogin {
	constructor(private loginUserCase: LoginUserCase) {}

	public execute = async (userData: IReadUserDTO) => {
		// const { email, password } = userData;
		await this.loginUserCase.execute(userData);
	};
}