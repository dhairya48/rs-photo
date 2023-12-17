const mysql = require("mysql");
const util = require("util");
const { promisify } = require("util");
var connection;
var pool;
const createConnectionDB = async (code) =>
  new Promise(async (resolve, reject) => {
    try {
      const databaseConfig = {
        connectionLimit: 10,
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password:'',
        database: process.env.DATABASE,
      };
      console.log('databaseConfig',databaseConfig)
      pool = mysql.createPool(databaseConfig);
      pool.query = promisify(pool.query).bind(pool);
      resolve(pool);
      console.log('----------SERVER RUNNING ON MYSQL DB----------')
    } catch (error) {
      reject(error);
    }
  });
const closeConnectionDB = async (DBObj) =>
  new Promise(async (resolve, reject) => {
    try {
      const promisePoolEnd = promisify(DBObj.end).bind(DBObj);
      resolve (true)
      promisePoolEnd();
    } catch (error) {
      reject(error);
    }
  });

module.exports = { createConnectionDB,closeConnectionDB,connection };
