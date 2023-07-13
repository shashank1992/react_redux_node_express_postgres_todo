import 'reflect-metadata';
import * as express from "express";
import { myDataSource} from './data-source';


myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

import boardRoutes from './routes/board';
import todoRoutes from './routes/todo';

const app = express()
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req,res) => res.json({chant:'hare krishna'}));
app.use('/board',boardRoutes);
app.use('/todo', todoRoutes);


const port = 8000;

app.listen(port, ()=>{
    console.log('app listening at port %s', port)
});
