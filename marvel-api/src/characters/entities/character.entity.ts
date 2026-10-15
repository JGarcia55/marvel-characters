import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team } from '../../teams/entities/team.entity';

export enum CharacterStatus {
  ACTIVE = 'ACTIVE',
  INJURED = 'INJURED',
  MISSING = 'MISSING',
  RETIRED = 'RETIRED',
}

@Entity({ name: 'characters' })
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'real_name', type: 'varchar' })
  realName: string;

  @Column({ type: 'varchar', unique: true })
  alias: string;

  @Column({ name: 'main_power', type: 'varchar' })
  mainPower: string;

  @Column({ name: 'power_level', type: 'integer' })
  powerLevel: number;

  @Column({
    type: 'enum',
    enum: CharacterStatus,
  })
  status: CharacterStatus;

  @Column({ name: 'is_villain', type: 'boolean' })
  isVillain: boolean;

  @Column({ name: 'team_id', type: 'integer', nullable: true })
  teamId: number | null;

  @ManyToOne(() => Team, { nullable: true })
  @JoinColumn({ name: 'team_id' })
  team: Team | null;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}