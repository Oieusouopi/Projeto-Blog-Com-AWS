import express, { Request, Response } from "express";
class App {
	private app: express.Express;

	constructor() {
		this.app = express();

		this.app.use(express.json());

		this.app.get("/", (_req: Request, res: Response) => res.json({
			message: "Hello World"
		}));
	}

	public start(PORT: number): void {
		this.app.listen(PORT, () => console.log(`rodando na porta ${ PORT }`));
	}
}

export default App;
