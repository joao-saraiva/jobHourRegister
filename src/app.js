import express from "express";
import db from './config/db.js'
import chalk from "chalk";
import routes from './routes/index.js'

const app = express();
const initializeDB = () => {
  db.on('error', console.log.bind(console, chalk.red('It was not possible to connect to your database')));
  db.once('open', () => { console.log( chalk.green('Successful connection established with your database') ) } );
}

app.use(express.json());
initializeDB();
routes(app);



export default app;
