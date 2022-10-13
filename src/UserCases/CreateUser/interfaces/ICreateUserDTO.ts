export interface ICreateUserDTO {
    id?: string,
    name: string,
    nickName: string,
    password: string,
    email: string,
    admin: boolean,
}