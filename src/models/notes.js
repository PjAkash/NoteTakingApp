const { db } = require('./../config/db')

class Note {
    constructor ({ id, title, content }) {
        this.id = id
        this.title = title
        this.content = content
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
                throw new Error('Database error', { cause: e })
            })
    }

    update = async () => {
        await db
            .connect()
            .then((client) => {
                return client
                    .query('UPDATE notes SET title=$1, content=$2, updated_at=NOW() WHERE id=$3', [this.title, this.content, this.id])
                    .finally(() => {
                        client.release()
                    })
            })
            .catch((e) => {
                throw new Error('Database error', { cause: e })
            })
    }

    static remove = async (id) => {
        await db
            .connect()
            .then((client) => {
                console.log(id)
                return client
                    .query('UPDATE notes SET removed=TRUE, updated_at=NOW() WHERE id=$1', [id])
                    .finally(() => {
                        client.release()
                    })
            })
            .catch((e) => {
                throw new Error('Database error', { cause: e })
            })
    }

    static get = async (id) => {
        const x = await db
            .connect()
            .then((client) => {
                return client
                    .query('SELECT id, title, content FROM notes WHERE id=$1 and removed=FALSE', [id])
                    .then(res => {
                        if (res.rowCount === 0) {
                            throw new Error('no rows found')
                        }
                        return new Note(res.rows[0])
                    })
                    .finally(() => {
                        client.release()
                    })
            })
            .catch(e => {
                throw new Error('Database error', { cause: e })
            })
        return x

        // if (row == undefined){

        // }
        // let note = new Note(row.id, row.title, row.content)
        // return note;
    }
}

exports.Note = Note
