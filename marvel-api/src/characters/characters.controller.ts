import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    findAll() {
        return this.charactersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const character = await this.charactersService.findOne(+id);
        if (!character) {
            return { message: 'Character not found' };
        }
        return character;
    }
}
