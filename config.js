// /** Common config for message.ly */
// 
// read .env files and make environmental variables
// 
require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgres://testing1:testingpassword1@localhost/messagely_test"
  : "postgres://testing1:testingpassword1@localhost/messagely";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
//************************Thsii is the base of how to set up the database info above in line 8-9 */
// postgres://username:password@localhost/db_name

//***********************************Testing New section******************* */
// require("dotenv").config();
// 
// const pg = require("pg");
// 
// const DB_URI = (process.env.NODE_ENV === "test")
// ? "postgresql:///messagely_test"
// : "postgresql:///messagely";
// 
// const SECRET_KEY = process.env.SECRET_KEY || "secret";
// 
// const BCRYPT_WORK_FACTOR = 12;

// const db = new pg.Client({
  // host: "localhost",
  // user: "testing1",
  // port: 5432,
  // password: SECRET_KEY,
  // database: DB_URI
// })
// 
// db.connect();
// 
// module.exports = {
  // DB_URI,
  // SECRET_KEY,
  // BCRYPT_WORK_FACTOR,
// };
// 
// 