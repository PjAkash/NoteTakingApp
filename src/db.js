const { Pool } = require('pg')
// import { Pool } from 'pg'

const init = async () => {
    const pool = new Pool({
      user: 'postgres',
      host: '192.168.29.85',
      database: 'note_taker',
      password: 'postgres',
      port: 5430,
    })
    
    await pool
      .connect()
      .then(client => {
        console.log("pass");
        client.release();
      })
      .catch(err => { throw err })

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

    return pool;
}



exports.init = init;