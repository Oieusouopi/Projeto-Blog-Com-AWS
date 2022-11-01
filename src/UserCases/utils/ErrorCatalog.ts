import message from "./message";
import httpCode from "./httpCode";

export enum ErrorTypes {
    fieldEmpty = "fieldEmpty",
    nameSize = "nameSize",
    nickNameSize = "nickNameSize",
    emailInvalid = "emailInvalid",
    passwordInvalid = "passwordInvalid",
}

type treatedError = {
    error: string;
    httpStatus: number;
}

export type ErrorCatalog = { [key in ErrorTypes]: treatedError };

export const errorCatalog: ErrorCatalog = {
	fieldEmpty: {
		error: message.FIELD_EMPTY,
		httpStatus: httpCode.BAD_REQUEST
	},
	emailInvalid: {
		error: message.EMAIL_INVALID,
		httpStatus: httpCode.BAD_REQUEST
	},
	nameSize: {
		error: message.NAME_SIZE,
		httpStatus: httpCode.BAD_REQUEST
	},
	nickNameSize: {
		error: message.NICKNAME_SIZE,
		httpStatus: httpCode.BAD_REQUEST
	},
	passwordInvalid: {
		error: message.PASSWORD_INVALID,
		httpStatus: httpCode.BAD_REQUEST
	}
};