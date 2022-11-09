const express = require('express')
const { createNote } = require('./../controllers/notes')
const { getNote } = require('./../controllers/notes')

const router = express.Router()

router.post('/note/create', createNote)

router.get('/note/:noteId', getNote)

exports.router = router
