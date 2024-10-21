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

  @OneToOne(() => Day, (day) => day.program, {
    onDelete: "SET NULL", // Mettre dayId à NULL lors de la suppression d'un Day
    nullable: true, // Rendre la relation optionnelle
    eager: false, // Désactiver le eager loading pour éviter les relations circulaires
  })
  @JoinColumn()
  day?: Day;
}
