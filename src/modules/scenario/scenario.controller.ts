/* eslint-disable prettier/prettier */
import { ScenarioService } from './scenario.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Post()
  create(@Body() createScenarioDto: CreateScenarioDto) {
    return this.scenarioService.create(createScenarioDto);
  }

  @Get()
  findAll() {
    return this.scenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scenarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateScenarioDto: UpdateScenarioDto,
  ) {
    return this.scenarioService.update(id, updateScenarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scenarioService.delete(id);
  }
}
