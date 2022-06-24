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
router.get('/:id', getBook, async (req, res) => {
    res.json(res.book)
})

//Créer 1 livre
router.post('/', async (req, res) => {
    try {
        const book = new Book({
            ...req.body
        })
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//Modifier 1 livre
router.patch('/:id', getBook, (req, res) => {
    res.send('Modifier 1 livre')
})

//Supprimer 1 livre
router.delete('/:id', getBook, (req, res) => {
    try {
        res.book.remove()
        res.json({
            message: 'Le livre a bien été supprimé.'
        })
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

async function getBook(req, res, next) {
    try{
        let book = await Book.findById(req.params.id);
        if (book == null){
            return res.status(404).json({
                message: 'Livre non trouvé.'
            })
        }
        res.book = book;
        next()
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
module.exports = router