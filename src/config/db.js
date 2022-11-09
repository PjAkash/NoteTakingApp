const { Pool } = require('pg')
// import { Pool } from 'pg'
const { connectionString } = require('./constants')

const pool = new Pool({
    connectionString: connectionString
})

// await pool
//   .connect()
// .then(client => {
//     console.log("pass");
//     client.release();
//   })
//   .catch(err => { throw err })

// client
//   .query('SELECT NOW()')
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(() => {
//     client.release();
//   })

exports.db = pool
