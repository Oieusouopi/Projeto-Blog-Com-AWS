import { NextFunction, Request, Response, Router } from "express";

export class CreateUserRouter {
	router: Router;
	constructor() {
		this.router = Router();
		this.router.post("/register", (req: Request, res: Response, _next: NextFunction) => {
			return res.status(201).json();
		});
	}
}