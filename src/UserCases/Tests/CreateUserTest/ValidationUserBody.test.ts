import { describe } from "mocha";
import * as sinon from "sinon";
import * as chai from "chai";
import { UserRepository } from "../../../repositories/implementation/UserRepository";
import { CreateUserCase } from "../../CreateUser/CreateUserCase";
import { ValidationUserBody } from "../../CreateUser/ValidationUserBody";

describe("Validation body to creating user", () => {
	const userRepository = new UserRepository();
	const createUserCase = new CreateUserCase(userRepository);
	const validationUserBody = new ValidationUserBody(createUserCase);
	beforeEach(() => {
		sinon.stub(createUserCase, "execute").resolves(undefined);
	});
	afterEach(() => {
		sinon.restore();
	});
	it("Sucessfully if all DTO is alright", async () => {
		const res = await validationUserBody.execute({ id:"1",name:"rafael", nickName:"oieusouopi",password:"1234567",email:"rafasc866@gmail.com",admin:true});
		chai.expect(res).to.be.equals(undefined);
	});
});