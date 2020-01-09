import * as express from 'express';
import wds from './wds';
import path from 'path';
const port = process.env.PORT || 5000

if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = 'production';
}

const isDevelopment = process.env.NODE_ENV === 'development';
const app = express();

if (isDevelopment) {
    wds(app);
} else {
    app.use(path.resolve(__dirname, '..', '..', 'dist'), express.static(path.resolve(__dirname, '..', '..', 'dist')));
}

app.get("/api", (req: express.Request, res: express.Response): void => {
    res.send("You have reached the API!");
});

app.get("/api/test", (req: express.Request, res: express.Response): void => {
    res.send({name:"Max"});
});




app.listen(port, () => {
    console.log(`Server started on port: ${port}, environment: ${process.env.NODE_ENV}, Development: ${isDevelopment}`);
});