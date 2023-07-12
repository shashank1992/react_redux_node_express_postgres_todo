import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import {Board} from './Board';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: true, length: 2000})
  text: string;

  @Column({default: false})
  isCompleted: boolean;

  @Column({nullable: false, name:'board_id'})
  boardId: number;

  @ManyToOne(type=>Board, board => board.todos)
  @JoinColumn({name: 'board_id'})
  board: Board;
}