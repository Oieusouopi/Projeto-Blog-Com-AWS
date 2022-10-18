import { NextFunction, Request, Response, Router } from "express";
import { factoryCreateUser } from "../UserCases/CreateUser";

const userRouter = Router();

userRouter.get("/", (req, res) => {
	res.json({message: "pegouj"});
});

userRouter.post("/register", (req: Request, res: Response, next: NextFunction) => {
	return factoryCreateUser().handle(req, res, next);
});

export default userRouter;