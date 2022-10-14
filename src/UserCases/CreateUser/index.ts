import { CreateUserController } from "../../controller/UserController/CreateUserController";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { CreateUserCase } from "./CreateUserCase";
import { ValidationUserBody } from "./ValidationUserBody";

export const factoryCreateUser = () => {
	const userRepository = new UserRepository();
	const createUserCase = new CreateUserCase(userRepository);
	const validationUserBody = new ValidationUserBody(createUserCase);
	const createUserController = new CreateUserController(validationUserBody);
	return createUserController;
};