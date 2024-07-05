import pkg from "pg";

const { Pool } = pkg;

const config = {
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "1208",
};

const pool = new Pool(config);

async function getBase() {
  const res = await pool.query("select * from person");
  return res.rows;
}

//----------- insert data

const query = {
  text: "INSERT INTO person (person_id,person_name,person_lastName, perosn_age) VALUES($1, $2, $3, $4)",
  values: [3,'miguel','contreras',20],
};


async function postBase() {
  const res = await pool.query(query);
  return res.rows;
}

export { getBase,postBase };
