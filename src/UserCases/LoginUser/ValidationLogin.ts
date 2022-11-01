import { IReadUserDTO } from "./interfaces/IReadUserDTO";
import ReadUserCase from "./LoginUserCase";

export default class ValidationLogin {
	constructor(private readUserCase: ReadUserCase) {}

	public execute = async (userData: IReadUserDTO) => {
		// const { email, password } = userData;
		await this.readUserCase.execute(userData);
	};
}