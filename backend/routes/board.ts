import * as express from 'express';
import { Request, Response } from "express"
import { Board } from '../entities/Board';
import { myDataSource } from '../data-source';

const router = express.Router();




router.get('/', async function(req:Request, res:Response){
      const boards = await myDataSource.getRepository(Board).find()
      res.json(boards);
})

router.get("/:id", async function(req:Request, res:Response){
      const board = await myDataSource.getRepository(Board).findOneBy({ 
        id : Number(req.params.id)})
        return res.send(board);
})

router.post('/', async function(req:Request, res:Response){
      const board = myDataSource.getRepository(Board).create(req.body)
      const result = await myDataSource.getRepository(Board).save(board)
      return res.send(result);
})

router.delete('/:id', async function(req:Request, res:Response){
      const result = await myDataSource.getRepository(Board).delete(req.params.id)
      return res.send(result)
})

export default router;
