import express from "express";
import usersRouter from "./Routes/users.js";
import postsRouter from "./Routes/posts.js";
import authRouter from "./Routes/auth.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

app.listen(8800, () => {
  console.log("connected to Api!");
});
