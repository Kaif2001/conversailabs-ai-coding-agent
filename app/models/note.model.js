const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        default: 'General'
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    isArchived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Enable text search
NoteSchema.index(
    {
        title: "text",
        content: "text",
        tags: "text",
        category: "text"
    },
    {
        weights: {
            title: 10,
            content: 5,
            tags: 3,
            category: 2
        },
        name: "NoteSearchIndex"
    }
);

module.exports = mongoose.model("Note", NoteSchema);