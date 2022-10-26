// import { CreateUserController } from "../../../controller/UserController/CreateUserController";
// import { UserRepository } from "../../../repositories/implementation/UserRepository";
// import { CreateUserCase } from "../../CreateUser/CreateUserCase";
// import { ValidationUserBody } from "../../CreateUser/ValidationUserBody";
// import  * as sinon from "sinon";
// import * as chai from "chai";
// import { Response } from "express";

// describe("Controller layer to create user", () => {
// 	const userRepository = new UserRepository();
// 	const createUserCase = new CreateUserCase(userRepository);
// 	const validationUserBody = new ValidationUserBody(createUserCase);
// 	const createUserController = new CreateUserController(validationUserBody);
// 	const res = {};
// 	const req = {};
// 	const next = () => {null;};
// 	beforeEach( async () => {
// 		sinon.stub(validationUserBody, "execute").resolves(undefined);
// 	});
// 	afterEach(() => {
// 		sinon.restore();
// 	});
// 	it("Sucessfully if all DTO is alright", async () => {
// 		const result = await createUserController.handle(req,res,next);
// 	});
// });