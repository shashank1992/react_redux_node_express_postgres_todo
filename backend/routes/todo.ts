import * as express from 'express';
import { Request, Response } from "express"
import { Board } from '../entities/Board';
import {Todo} from '../entities/Todo';
import { myDataSource } from '../data-source';

const router = express.Router();

router.get('/:boardId', async function(req:Request, res:Response){
      const board = await myDataSource.getRepository(Board).findOneBy({
        id: Number(req.params.boardId)})
      const todos = await myDataSource.getRepository(Todo).find({
        where : {board: board},
        relations : ['board'],
      }) 
      
      res.json(todos);
})

router.post('/', async function(req:Request, res:Response){

      const todo = myDataSource.getRepository(Todo).create(req.body)
      const result = await myDataSource.getRepository(Todo).save(todo)
      return res.send(result)
})

router.delete('/:id', async function(req:Request, res:Response){
      const todo = await myDataSource.getRepository(Todo).delete(req.params.id)
      return res.send(todo)
})

router.put('/:id', async function(req: Request, res: Response) {
  const todoRepository = myDataSource.getRepository(Todo);

  try {
      const todo = await todoRepository.findOneBy({
        id: Number(req.params.id)
      });

      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      // Update the todo object based on the request body
      todoRepository.merge(todo,req.body)
      // Save the updated todo object
      await todoRepository.save(todo);

      return res.status(200).json({ message: 'Todo updated successfully', todo });
  } catch (error) {
    console.error('Error updating todo:', error);
    return res.status(500).json({ message: 'Failed to update todo' });
  }
});


export default router;
