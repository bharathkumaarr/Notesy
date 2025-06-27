const express = require('express')
const router = express.Router()
const NotesyModel = require('../models/NotesyModel')

router.post('/', async (req,res)=>{
    try {
        const {content} = req.body;
        const note = new NotesyModel({content})
        const savedNote = await note.save();
        res.json({id: savedNote._id});

    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const note = await NotesyModel.findById(req.params.id);
        if (!note) return res.status(404).json({error: 'Note not found'});
        res.json(note);
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router