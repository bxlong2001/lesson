const Word = require('../models/Word');

class MeController {
    // [GET] /me/stored/words
    storedWords(req, res, next) {
        Promise.all([Word.find({}).lean(), Word.countDocumentsDeleted().lean()])
            .then(([words, deleteCount]) =>
                res.render('me/stored-words', {
                    deleteCount,
                    words,
                }),
            )
            .catch(next);
    }

    // [GET] /me/stored/words
    binWords(req, res, next) {
        Word.findDeleted({})
            .lean()
            .then((words) => res.render('me/bin-words', { words }))
            .catch(next);
    }
}

module.exports = new MeController();
