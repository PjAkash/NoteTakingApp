const express = require('express')
const { createNote, getNote, updateNote, removeNote } = require('./../controllers/notes')

const router = express.Router()

router.post('/note/create', createNote)

router.get('/note/:noteId', getNote)

router.post('/note/update', updateNote)

router.post('/note/remove', removeNote)

exports.router = router
