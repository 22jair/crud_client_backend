var mysql      = require('mysql');
const { HOST, USER, PASSWORD } = process.env;

const db = mysql.createPool({
  host     :  process.env.HOST,
  user     :  process.env.USER,
  password :  process.env.PASSWORD,
  database :  process.env.DATABASE
});
 
const dbConnection = async () => {
  await db.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    } else {
      console.log('DB connected');
    }
  });
}
  


module.exports = {
  db,
  dbConnection
};