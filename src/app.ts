import express, {Application, Request,Response,NextFunction} from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './routes';

import { removeAllListeners } from 'cluster';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

Routes({ app });

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});