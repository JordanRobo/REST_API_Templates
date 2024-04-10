import { Elysia } from "elysia";
import userRoutes from "./routes/users/userRoutes";

const app = new Elysia();

app
  .group('/api', (app) => app.use(userRoutes))
  .listen(process.env.PORT || 2323);

console.log(`🦊 Elysia is running at on ${app.server?.hostname}: ${app.server?.port}`)
