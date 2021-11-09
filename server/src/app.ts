import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import router from 'Routes/';
import { errorHandler } from 'Middlewares/error-handler';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 4000;
const app = express();

const corsOrigin = process.env.NODE_ENV === 'production' ? 'http://amadda.net' : 'http://localhost:3000';

app.use(morgan('dev'));
app.use(cors({ origin: corsOrigin, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api', router);
app.use(errorHandler);

app.use((req, res) => {
  console.log(path.join(__dirname, '../../client/dist/index.html'));
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
