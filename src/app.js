import express from 'express';
<<<<<<< HEAD
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
=======
import dotenv from 'dotenv';
import passport from './config/passport.js';
import sessionRouter from './routes/sessions.router.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/api/sessions', sessionRouter);

export default app;
>>>>>>> 749e71576dd0d6ae75f085e3cea5c3c02b5463c6
