const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


// Inicializations:
const app = express();


// Settings:
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    //partialsDir: path.join(app.get('views'), 'partials'),
    //backofficeDir: path.join(app.get('views'), 'backoffice'),
    //loginDir: path.join(app.get('views'), 'login'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}));
app.set('view engine', '.hbs');


// Middlewares:
app.use(morgan('dev')); //--------//mantener servidor encendido.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Global Variables:
app.use((req, res, next) => {
    next();
});

// Routes:
app.use(require('./routes/index'));
app.use(require('./routes/login'));
app.use('/post', require('./routes/post'));



// Public:
app.use(express.static(path.join(__dirname, '/public')));


// Starting the Server:
app.listen(app.get('port'), () => {
    console.log('Server PostUX On Port', app.get('port'));
});