import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './src/config/db.js'; 
import apiRoutes from './src/routes/index.routes.js';
import viewRoutes from './src/routes/view.routes.js';
import './src/config/passport.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

// Passport
app.use(passport.initialize());

// Rutas
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// Conectar a la base de datos
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});