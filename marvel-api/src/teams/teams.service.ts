import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamsRepository.find();
  }

  findOne(id: number): Promise<Team | null> {
    return this.teamsRepository.findOneBy({ id });
  }
  
}