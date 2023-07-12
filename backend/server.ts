import 'reflect-metadata';
import * as express from "express";
import { myDataSource} from './data-source'

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
app.use('/board',boardRoutes);
app.use('/todo', todoRoutes);

app.get('/', (req,res) => res.json({chant:'hare krishna'}));

const port = 3000;

app.listen(port, ()=>{
    console.log('app listening at port %s', port)
});
