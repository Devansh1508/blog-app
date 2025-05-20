const Blog = require('../models/Blog');

// Save a draft of the blog
exports.saveDraft = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const blog = new Blog({
            title,
            content,
            tags: tags.split(',').map(tag => tag.trim()),
            status: 'draft',
            created_at: new Date(),
            updated_at: new Date()
        });
        await blog.save();
        res.status(201).json({ message: 'Draft saved successfully', blog });
    } catch (error) {
        res.status(500).json({ message: 'Error saving draft', error });
    }
};

// Publish a blog
exports.publishBlog = async (req, res) => {
    try {
        const { uid, title, desc, imageUrl } = req.body;
        const blog = await Blog.create({
            userId: uid,
            title,
            desc,
            imageUrl,
        });
        res.status(201).json({ message: 'Blog published successfully', blog });
    } catch (error) {
        res.status(500).json({ message: 'Error publishing blog', error });
    }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        console.log("hello");
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving blogs', error });
    }
};

// Get a blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        console.log(blog)
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving blog', error });
    }
};

