const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1, 
        post_url: 'https://handlebarsjs.com/gulde/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        vote_count: 10, 
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;