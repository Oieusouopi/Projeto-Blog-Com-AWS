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
		error: "messagem aq",
		httpStatus: 999
	},
	emailInvalid: {
		error: "messagem aq",
		httpStatus: 999
	},
	nameSize: {
		error: "messagem aq",
		httpStatus: 999
	},
	nickNameSize: {
		error: "messagem aq",
		httpStatus: 999
	},
	passwordInvalid: {
		error: "messagem aq",
		httpStatus: 999
	}
};