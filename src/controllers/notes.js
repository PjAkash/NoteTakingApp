const { Note } = require('./../models/notes')

const createNote = async (req, res) => {
    const note = new Note({ title: req.body.title, content: req.body.content })

    await note.store()
        .catch((e) => {
            console.log(e)
            res.status(400).send({ error: e.message })
        })

    res.sendStatus(200)
}

const getNote = async (req, res) => {
    const id = parseInt(req.params.noteId)

    const note = await Note.get(id)
        .catch((e) => {
            console.log(e)
            res.status(400).send({ error: e.message })
        })

    res.send(note)
}

const updateNote = async (req, res, next) => {
    const note = new Note({ id: req.body.id, title: req.body.title, content: req.body.content })

    await note.update()
        .catch((e) => {
            console.log(e)
            // res.status(400).send({ error: e.message })
            // next(e)
            throw e
        })
    console.log('gohoh2')
    res.sendStatus(200)
}

const removeNote = async (req, res) => {
    const note = await Note.remove(req.body.id)
        .catch((e) => {
            console.log(e)
            res.status(400).send({ error: e.message })
        })

    res.send(note)
}

exports.createNote = createNote
exports.getNote = getNote
exports.updateNote = updateNote
exports.removeNote = removeNote
