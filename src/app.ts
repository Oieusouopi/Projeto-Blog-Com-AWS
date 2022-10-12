import express, { Request, Response } from 'express'
class App {
    private app: express.Express;

    constructor() {
        this.app = express()

        this.app.use(express.json())

        this.app.get("/", (_req: Request, res: Response) => res.json({
            message: "Hello World"
        }))
    }

    public start(): void {
        this.app.listen(3333, () => console.log("rodando na porta 3333"))
    }
}

export default App;
