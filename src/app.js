import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import './config/passport.config.js';
import routes from './routes/index.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Passport
app.use(passport.initialize());

// Rutas
app.use('/api', routes);

export default app;