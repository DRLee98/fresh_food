import express from "express"
import routes from "../routes"

const globalRouter = express.Router();

globalRouter.get(routes.home, /*controller*/)

export default globalRouter;