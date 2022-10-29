const { Note } = require('./../models/notes')

const createNote = (req, res) => {

    const note = new Note(undefined, req.body.title, req.body.content);

    note.store();

    res.send(req.body)
}

const getNote = async (req, res) => {
    
    const id = req.param('noteId')

    const note = await Note.get(id)
        .catch((e) => {
            res.status(400).send({error: e.toString()})
            return
        })

    res.send(note);
}

exports.createNote = createNote;
exports.getNote = getNote;