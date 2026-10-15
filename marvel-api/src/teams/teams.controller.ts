import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}
    
    @Get()
    findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const team = await this.teamsService.findOne(+id);
        if (!team) {
            return { message: 'Team not found' };
        }
        return team;
    }

    
}
