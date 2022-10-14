import { NextFunction, Request, Response } from "express";
import { ValidationUserBody } from "../../UserCases/CreateUser/ValidationUserBody";

export class CreateUserController {
	constructor(private validationUserBody: ValidationUserBody) {}

	public handle = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { name, nickName, password, email } = req.body;
			await this.validationUserBody.execute({name, nickName, password, email, admin: false});
			return res.status(201).json({ message: "Usuário criado com sucesso" }); 
		} catch (error) {
			next(error);
		}
	};
}