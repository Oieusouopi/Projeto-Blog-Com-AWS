import { NextFunction, Request, Response, Router } from "express";
import { factoryCreateUser } from "../../UserCases/CreateUser";

export class CreateUserRouter {
	router: Router;
	constructor() {
		this.router = Router();
		this.router.post("/register", (req: Request, res: Response, next: NextFunction) => {
			factoryCreateUser().handle(req,res,next);
		});
	}
}