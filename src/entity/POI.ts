// src/entity/POI.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class POI {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  type!: string; // e.g., 'stage', 'shop', 'restroom'

  @Column('double precision')
  latitude!: number;

  @Column('double precision')
  longitude!: number;

  @Column({ nullable: true })
  description!: string;
}
