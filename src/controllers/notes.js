const { Note } = require('./../models/notes')

const createNote = async (req, res) => {

    const note = new Note({title: req.body.title, content: req.body.content});

    await note.store()
        .catch((e) => {
            console.log(e)
            res.status(400).send({error: e.message})
        })

    res.sendStatus(200)
}

const getNote = async (req, res) => {
    
    const id = parseInt(req.params.noteId)

    const note = await Note.get(id)
        .catch((e) => {
            console.log(e)
            res.status(400).send({error: e.message})
            return
        })

    res.send(note);
}

exports.createNote = createNote;
exports.getNote = getNote;