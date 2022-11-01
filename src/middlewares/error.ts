import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { errorCatalog, ErrorTypes } from "../UserCases/utils/ErrorCatalog";

const treatedError: ErrorRequestHandler = (
	err: Error, _req: Request, res: Response, next: NextFunction) => {
	const messageAsErrorType = err.message as keyof typeof ErrorTypes;
	const mappedError = errorCatalog[messageAsErrorType];
	if (mappedError) {
		const { httpStatus, error } = mappedError;
		return res.status(httpStatus).json({ error });
	}
	return res.status(500).json({ message: "Servidor Error" });    
};

export default treatedError;