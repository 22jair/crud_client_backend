const { db } = require('../database/config');

class Client {
  

  /*
    * No params
  */
  getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT id, name, surname, birthdate, email, phone, status, created_at FROM client ORDER BY created_at DESC',
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    }) 
  }

  /*
    * @param id
  */
  getById (id){
    return new Promise((resolve, reject) => {
      db.query('SELECT name, surname, birthdate, email, phone, created_at FROM client WHERE id = ?', [id], function (error, results) {
        if (error) reject(error);        
        resolve(results);
      });
    })
  }

  /*
    * @param {Object} data : { name, surname, email, phone, birthdate }
  */
  save(data) {    
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO client SET ?', data , function (err, result, fields) {
        if (err) reject(err);
        resolve(result);            
      });
    });
  }

  /*
    * @param id
    * @param {Object} data : { name, surname, email, phone, birthdate }
  */
  update(id, data) {    
    return new Promise((resolve, reject) => {
      db.query('UPDATE client SET ? WHERE id=?', [data, id] , function (err, result, fields) {  
        if (err) reject(err);
        resolve(result);
      });
    });    
  }

  /*
    * @param id    
  */
   delete(id) {    
    return new Promise((resolve, reject) => {
      db.query('UPDATE client SET status=? WHERE id=?', [0, id] , function (err, result, fields) {  
        if (err) reject(err);
        resolve(result);
      });
    });    
  }

  /*
    * @param id
  */
  restoreStatus(id) {    
    return new Promise((resolve, reject) => {
      db.query('UPDATE client SET status=1 WHERE id=?', [id] , function (err, result, fields) {  
        if (err) reject(err);
        resolve(result);
      });
    });    
  }


  /* 
    * no params
  */
  getStatistics(){
    return new Promise((resolve, reject) => {      
      const query = `
        SELECT avgBirthdateAll, avgBirthdateActive, actives, inactives 
        FROM
        ( SELECT AVG(YEAR(NOW())-YEAR(birthdate)) AS avgBirthdateAll FROM client ) AS avgBirthdateAll,
        ( SELECT AVG(YEAR(NOW())-YEAR(birthdate)) AS avgBirthdateActive FROM client WHERE status = 1 ) AS avgBirthdateActive,
        ( SELECT COUNT(*) AS actives FROM client WHERE status = 1 ) AS actives,
        ( SELECT COUNT(id) AS inactives FROM client WHERE status = 0 ) AS inactives;
      `;      
      db.query(query, function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    }) 
  }
  
  getObjectClient(){
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone,
      birthdate: this.birthdate
    }
  }
}

module.exports = Client;
