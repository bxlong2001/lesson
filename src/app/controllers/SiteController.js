const Word = require('../models/Word');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Word.find({})
            .lean()
            .then((words) => res.render('home', { words }))
            .catch(next); // = .catch(words => next(words))
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }

    words(req, res) {
        res.render('words');
    }
}

module.exports = new SiteController();
