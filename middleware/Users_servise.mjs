import { getBase, postBase } from "../db/base_data.mjs";

function list_users() {
  const list = getBase();
  return list;
}

function create_user() {
  const create_new_user = postBase();
  return create_new_user;
}

export { list_users, create_user };
