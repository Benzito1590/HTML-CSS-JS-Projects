const passport = require('passport')

module.exports = app => {
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            if (req.user.firstLogin === true) {
                res.redirect('/profile')
            }
            res.redirect('/books')
        }
    )
    app.get('/auth/twitter',
        passport.authenticate('twitter'));

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/login' }),
        (req, res) => {
            if (req.user.firstLogin === true) {
                res.redirect('/profile')
            }
            res.redirect('/books')
        });

    app.get('/auth/github',
        passport.authenticate('github', { scope: ['user:email'] }));

    app.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/login' }),
        (req, res) => {
            if (req.user.firstLogin === true) {
                res.redirect('/profile')
            }
            res.redirect('/books')
        });

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}

