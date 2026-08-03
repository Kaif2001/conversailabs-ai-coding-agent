const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content,
        category: req.body.category || "General",
        tags: Array.isArray(req.body.tags)
            ? req.body.tags
            : (req.body.tags ? [req.body.tags] : [])
    });

    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve all notes
exports.findAll = (req, res) => {
    const { search, category, tag, sortBy, order } = req.query;

    let query = {};

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { content: { $regex: search, $options: "i" } }
        ];
    }

    if (category) {
        query.category = { $regex: category, $options: "i" };
    }

    if (tag) {
        query.tags = {
            $in: Array.isArray(tag) ? tag : [tag]
        };
    }

    let sort = {};

    if (sortBy) {
        sort[sortBy] = order === "desc" ? -1 : 1;
    } else {
        sort.updatedAt = -1;
    }

    Note.find(query)
        .sort(sort)
        .then(notes => {
            res.send(notes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find one note
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            res.send(note);
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
};

// Update note
exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    Note.findByIdAndUpdate(
        req.params.noteId,
        {
            title: req.body.title || "Untitled Note",
            content: req.body.content,
            category: req.body.category || "General",
            tags: Array.isArray(req.body.tags)
                ? req.body.tags
                : (req.body.tags ? [req.body.tags] : [])
        },
        {
            returnDocument: "after"
        }
    )
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            res.send(note);
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

// Delete note
exports.delete = (req, res) => {
    Note.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            res.send({
                message: "Note deleted successfully!"
            });
        })
        .catch(err => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }

            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
};