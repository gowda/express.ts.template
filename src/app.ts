import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';

import * as greetController from './controllers/greet';

const app = express();

app.use(express.static(path.join(__dirname, '../styles')));

i18n.configure({
  locales: ['en', 'kn', 'de', 'fr'],
  cookie: '_lang',
  directory: path.join(__dirname, '../locales'),
  queryParameter: '_lang'
});

app.use(cookieParser());
app.use((req: Request, res: Response, next: NextFunction) => {
  const lang = req.cookies._lang || req.query._lang || 'en';
  req.cookies._lang = lang;
  res.cookie('_lang', lang);

  next();
});
app.use(i18n.init);

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', greetController.index);

export default app;
