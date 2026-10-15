import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ name: 'base', type: 'varchar', length: 150, nullable: true })
  base: string | null;

  @Column({ name: 'founded_year', type: 'integer', nullable: true })
  foundedYear: number | null;

  @Column({ name: 'active', type: 'boolean', default: true })
  active: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}