import { beforeEach, describe, it } from "mocha";
import * as sinon from "sinon";
import * as chai from "chai";
import { UserRepository } from "../../../repositories/implementation/UserRepository";
import { CreateUserCase } from "../../CreateUser/CreateUserCase";

describe("Creating user in usecases layers", () => {
	const userRepository = new UserRepository();
	const createUserCase = new CreateUserCase(userRepository);
	beforeEach(() => {
		sinon.stub(userRepository, "create").resolves();
	});
	afterEach(() => {
		sinon.restore();
	});
	it("Creating user with sucessfully", async () => {
		const res = await createUserCase.execute({ id:"1",name:"rafael", nickName:"oieusouopi",password:"1234567",email:"rafasc866@gmail.com",admin:true});
		chai.expect(res).to.be.equals(undefined);
	});
});