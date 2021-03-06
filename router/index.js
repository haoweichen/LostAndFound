var dashboardRouter = require('./dashboard');
var loginRouter = require('./login');
var registerRouter = require('./register');
var logoutRouter = require('./logout');

let configRoutes = (app) => {
    app.use('/', dashboardRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/logout', logoutRouter);
}

module.exports = configRoutes;