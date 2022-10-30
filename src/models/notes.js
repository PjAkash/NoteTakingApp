const e = require('express');
const { Client } = require('pg');
const { db } = require('./../config/db')

class Note {
    constructor({id, title, content}) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    store = async () => {
        await db
            .connect()
            .then((client) => {
                return client
                    .query('INSERT INTO notes (title, content) VALUES ($1, $2)', [this.title, this.content])
                    .finally(() => {
                        client.release()
                    })
            })
            .catch((e) => {
                throw new Error('Database error', {cause: e})
            })
    }

    static get = async (id) => {

        let x = await db
            .connect()
            .then((client) => {
                return client
                    .query('SELECT id, title, content FROM notes WHERE id=$1', [id])
                    .then(res =>{
                        if (res.rowCount === 0) {
                            throw new Error ('no rows found')
                        }
                        return new Note(res.rows[0])
                    })
                    .finally(() => {
                        client.release()
                    })
            })
            .catch(e => {
                throw new Error('Database error', {cause: e})
            })
        return x;

        // if (row == undefined){
            
        // }
        // let note = new Note(row.id, row.title, row.content)
        // return note;
    }
}



exports.Note = Note

