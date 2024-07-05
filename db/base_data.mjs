import pkg from "pg";

const {Pool} = pkg;

const config = {
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "1208",
};

const pool = new Pool(config);

async function getBase() {
  const res = await pool.query("select * from users");
  console.log(res);
};

getBase()
