const Word = require('../models/Word');

class WordController {
    // [GET] /words/:slug
    show(req, res, next) {
        Word.findOne({ slug: req.params.slug })
            .lean()
            .then((word) => {
                console.log(word);
                return res.render('words/show', { word })
            })
            .catch(next);
    }

    // [GET] /words/create
    create(req, res, next) {
        res.render('words/create');
    }

    // [POST] /words/store
    store(req, res, next) {
        const word = new Word(req.body);
        word.save()
            .then(() => res.redirect('/me/stored/words'))
            .catch((error) => {});
    }

    // [GET] /words/:id/edit
    edit(req, res, next) {
        Word.findById(req.params.id)
            .lean()
            .then((words) => res.render('words/edit', { words }))
            .catch(next);
    }

    // [PUT] /words/:id
    update(req, res, next) {
        Word.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/words'))
            .catch(next);
    }

    // [DELETE] /words/:id
    delete(req, res, next) {
        Word.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /words/:id/permanent
    deletePermanent(req, res, next) {
        Word.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /words/:id/restore
    restore(req, res, next) {
        Word.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new WordController();
