<<<<<<< HEAD
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

// Helpers ES Modules para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import apiRoutes from './src/routes/index.routes.js';
import viewRoutes from './src/routes/view.routes.js';
import './src/config/passport.config.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

// Passport
app.use(passport.initialize());

// Rutas API (prefijo /api)
app.use('/api', apiRoutes);

// Rutas vistas públicas (sin prefijo)
app.use('/', viewRoutes);

// Conexión MongoDB y arranque
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Corriendo en http://localhost:${PORT}`));
  })
  .catch(err => console.error('Error de conexión:', err));


// import dotenv from 'dotenv';
// dotenv.config();
// import mongoose from 'mongoose';
// import app from './src/app.js';


// const PORT = process.env.PORT || 8080;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Conectado a MongoDB');

//     app.listen(PORT, () => {
//       console.log(`Servidor corriendo en http://localhost:${PORT}`);
//     });
//   })

//   .catch(err => console.error('Error:', err));
=======
import app from './src/app.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
>>>>>>> 749e71576dd0d6ae75f085e3cea5c3c02b5463c6
