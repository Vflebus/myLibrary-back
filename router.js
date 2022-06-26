const { Router } = require("express");
const router = Router();
const Book = require('./models/book')
const bookController = require('./controllers/book');

// Récupérer un livre pour les routes avec id
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

// Avoir tous les livres
router.get('/', bookController.getall)

//Avoir 1 livre
router.get('/:id', getBook, bookController.getOne)

//Créer 1 livre
router.post('/', bookController.create)

//Modifier 1 livre
router.patch('/:id', getBook, bookController.update)

//Supprimer 1 livre
router.delete('/:id', getBook, bookController.delete)

module.exports = router