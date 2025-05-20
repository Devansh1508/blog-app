const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the updated_at field before saving
blogSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;