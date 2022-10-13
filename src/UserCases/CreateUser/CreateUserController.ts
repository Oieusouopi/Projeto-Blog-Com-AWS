import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
	constructor(private createUserService: CreateUserService) {}

	public handle = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { name, nickName, password, email } = req.body;
			await this.createUserService.execute({name, nickName, password, email});
			return res.status(201).json({ message: "Usuário criado com sucesso" }); 
		} catch (error) {
			next(error);
		}
	};
}