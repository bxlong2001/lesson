const { words } = require('../app/controllers/SiteController');
const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const wordRouter = require('./words');
const authRouter = require('./auth')

function route(app) {
    // '/' -> chỉ link trang chủ
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })
    app.use('/me', meRouter);
    app.use('/words', wordRouter);
    app.use('/auth', authRouter)
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })
}

module.exports = route;
