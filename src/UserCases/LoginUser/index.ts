import { LoginUserController } from "../../controller/UserController/LoginUserController";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import LoginUserCase from "./LoginUserCase";
import ValidationLogin from "./ValidationLogin";

export const factoryLoginUser = () => {
	const userRepository = new UserRepository();
	const loginUserCase = new LoginUserCase(userRepository);
	const validationLogin = new ValidationLogin(loginUserCase);
	const loginUserController = new LoginUserController(validationLogin);
	return loginUserController;
};