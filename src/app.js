import express from 'express';
import dotenv from 'dotenv';
import passport from './config/passport.js';
import sessionRouter from './routes/sessions.router.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/api/sessions', sessionRouter);

export default app;
