import express, { Request, Response } from "express"

const app = express()

app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
    res.json({ message: "Hello World" })
})

app.listen(3333, () => console.log("rodando na porta 3333"))