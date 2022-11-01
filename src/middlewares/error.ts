import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const treatedError: ErrorRequestHandler = (
	err: Error, _req: Request, res: Response, next: NextFunction) => {
};
