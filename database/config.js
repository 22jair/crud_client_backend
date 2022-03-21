var mysql      = require('mysql');
const { HOST, USER, PASSWORD } = process.env;

const db = mysql.createConnection({
  host     :  process.env.HOST,
  user     :  process.env.USER,
  password :  process.env.PASSWORD,
  database :  process.env.DATABASE
});
 
const dbConnection = async () => {
  db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }   
    console.log('DB connected');
  });
}

const dbQuery = async (sql, params) => {  
  // const connection = await mysql.createConnection(db);
  const [results] = db.query(sql, params);
  console.log("DBQUERY", results);
  return results;
}

module.exports = {
  db,
  dbConnection,
  dbQuery
};