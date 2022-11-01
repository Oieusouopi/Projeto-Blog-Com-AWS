import { NextFunction, Request, Response } from "express";
import ValidationLogin from "../../UserCases/LoginUser/ValidationLogin";

export class LoginUserController {
	constructor(private validationLogin: ValidationLogin) {}
	public handle = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { password, email } = req.body;
			await this.validationLogin.execute({ password, email });
			return res.status(200).json({ message: "Usuário logado com sucesso"});
		} catch (error) {
			next(error);
		}
	};
}