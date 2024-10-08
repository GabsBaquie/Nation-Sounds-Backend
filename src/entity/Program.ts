// src/entity/Program.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Day } from "./Day";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToOne(() => Day, (day) => day.program, { onDelete: "CASCADE" })
  @JoinColumn()
  day!: Day;
}
