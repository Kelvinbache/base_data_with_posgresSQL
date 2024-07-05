import { list_users } from "../../middleware/Users_servise.mjs";

function http_get(req, res) {
  const list = list_users();

  list.then((rows) => {
    res.json({ data: rows });
  });
}





export { http_get };
