const dbConnection = process.env.DATABASE_URL
const pg = require('pg');

module.exports = {

    // development: {
    //   client: 'sqlite3',
    //   useNullAsDefault: true,
    //   connection: {
    //     filename: './data/users.db3',
    //   },
    //   migrations: {
    //     directory: './data/migrations'
    //   },
    //   seeds: {
    //     directory: './data/seeds'
    //   },
    //   pool: {
    //     afterCreate: (conn, done) => {
    //       conn.run('PRAGMA foreign_keys = ON', done);
    //     },
    //   },
    // },
    // testing: {
    //   client: 'sqlite3',
    //   useNullAsDefault: true,
    //   connection: {
    //     filename: './data/test.db3',
    //   },
    //   migrations: {
    //     directory: './data/migrations'
    //   },
    //   seeds: {
    //     directory: './data/seeds'
    //   },
    //   pool: {
    //     afterCreate: (conn, done) => {
    //       conn.run('PRAGMA foreign_keys = ON', done);
    //     },
    //   },
    // },
    production: {
      client: pg,
      connection: dbConnection,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
      ssl: true
    }
};