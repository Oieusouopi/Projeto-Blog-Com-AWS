import { v4 as uuid_v4 } from "uuid";

export class User {
	id: string;
	name: string;
	email: string;
	nickName: string;
	password: string;
	admin: boolean;
	constructor(props: Omit<User, "id">, id?: string) {
		this.admin = props.admin;
		this.name = props.name;
		this.email = props.email;
		this.nickName = props.nickName;
		this.password = props.password;
		if (!id) {
			this.id = uuid_v4();
		} else {
			this.id = id;
		}
	}
}