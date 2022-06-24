const { Router } = require("express");
const router = Router();
const Book = require('./models/book')

// Avoir tous les livres
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//Avoir 1 livre
router.get('/:id', async (req, res) => {
    res.send('Avoir 1 livre')
})

//Créer 1 livre
router.post('/', async (req, res) => {
    try {
        const book = new Book({
            title: req.body.title,
            note: req.body.note,
        })
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//Modifier 1 livre
router.get('/:id', (req, res) => {
    res.send('Modifier 1 livre')
})

//Supprimer 1 livre
router.delete('/:id', (req, res) => {
    res.send('Supprimer 1 livre')
})
module.exports = router