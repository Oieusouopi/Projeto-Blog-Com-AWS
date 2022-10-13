import { NextFunction, Request, Response } from "express";
import { ValidationUserBody } from "../../UserCases/CreateUser/ValidationUserBody";

export class CreateUserController {
	constructor(private createUserService: ValidationUserBody) {}

	public handle = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { name, nickName, password, email, admin } = req.body;
			await this.createUserService.execute({name, nickName, password, email, admin});
			return res.status(201).json({ message: "Usuário criado com sucesso" }); 
		} catch (error) {
			next(error);
		}
	};
}