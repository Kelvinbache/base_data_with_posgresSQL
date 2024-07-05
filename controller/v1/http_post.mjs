import { create_user } from "../../middleware/Users_servise.mjs";

function http_post(req, res) {
  const create = create_user();

  create.then((rows) => {
    res.json({ message: "new user", data: rows });
  });
}


export { 
    http_post
}
