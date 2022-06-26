const Book = require('../models/book')

const bookController = {
    getall: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getOne: async (req, res) => {
        res.json(res.book)
    },
    create: async (req, res) => {
        try {
            const book = new Book({
                ...req.body
            })
            const newBook = await book.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    update: async (req, res) => {
        res.book = Object.assign(res.book, req.body);
        try {
            await res.book.save();
            res.json(res.book);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    delete: (req, res) => {
        try {
            res.book.remove()
            res.json({
                message: 'Le livre a bien été supprimé.'
            })
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = bookController;