import { NextFunction, Request, Response, Router } from "express";
import { factoryCreateUser } from "../UserCases/CreateUser";
import { factoryLoginUser } from "../UserCases/LoginUser";

const userRouter = Router();

userRouter.get("/", (req, res) => {
	res.json({message: "pegou"});
});

userRouter.post("/register", (req: Request, res: Response, next: NextFunction) => {
	return factoryCreateUser().handle(req, res, next);
});

userRouter.get("/login", (req: Request, res: Response, next: NextFunction) => {
	return factoryLoginUser().handle(req, res ,next);
});

export default userRouter;