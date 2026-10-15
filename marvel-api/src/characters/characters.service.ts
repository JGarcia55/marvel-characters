import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly charactersRepository: Repository<Character>,
  ) {}

    findAll(): Promise<Character[]> {
        return this.charactersRepository.find();
    }

    findOne(id: number): Promise<Character | null> {
        return this.charactersRepository.findOneBy({ id });
    }
}
