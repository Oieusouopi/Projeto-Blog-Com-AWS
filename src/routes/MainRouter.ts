import { Router } from "express";

export class MainRouter {
	router: Router;
	constructor() {
		this.router = Router();

		this.router.use("/users");
	}
}