import express, {Application, Request,Response,NextFunction} from 'express';
import bodyParser from 'body-parser';
import { removeAllListeners } from 'cluster';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});