import uniqid from "uniqid";

export class User {
	protected _id: string;
	name: string;
	email: string;
	nickName: string;
	password: string;
	constructor(props: Omit<User, "id">, id?: string) {
		this.name = props.name;
		this.email = props.email;
		this.nickName = props.nickName;
		this.password = props.password;
		if (!id) {
			this._id = uniqid();
		} else {
			this._id = id;
		}
	}
}