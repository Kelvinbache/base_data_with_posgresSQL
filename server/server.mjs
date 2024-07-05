import express from "express";
import { route } from "../route/v1/page_main.mjs";

const app = express();
const port = 3000;

app.use("/api/v1/users",route);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
