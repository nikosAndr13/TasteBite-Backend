import express from "express";
import "express-async-errors";
import { recipesController } from "./router/recipe.router";
import { userController } from './router/user.router';
import { commentController } from "./router/comment.router";
import { errorHandleMiddleware } from "./error-handler";
import { User } from "@prisma/client";
import { categoriesController } from "./router/category.router";

const app = express();

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
  namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.use("/recipes", recipesController);
app.use("/users", userController)
app.use(commentController)
app.use(categoriesController)

app.use(errorHandleMiddleware);

const port = process.env.NODE_ENV === "test" ? 3001 : 3000;
app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
`)
);