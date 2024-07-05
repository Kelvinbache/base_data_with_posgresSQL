import express from "express";
import { http_get } from "../../controller/v1/http_get.mjs";
import { http_post } from "../../controller/v1/http_post.mjs";

const route = express.Router();

route.get("/list-users", http_get);

route.post("/",http_post);

export { route };
