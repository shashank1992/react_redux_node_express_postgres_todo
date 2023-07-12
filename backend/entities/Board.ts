import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import {Todo} from './Todo';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Todo, todo => todo.board)
    todos: Todo[];

}