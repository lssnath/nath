/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, ListScenarioUseCase, OneScenarioUseCase, RemoveScenarioUseCase, UpdateScenarioUseCase } from './use-cases';



@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly oneScenarioUseCase: OneScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,
    private readonly removeScenarioUseCase: RemoveScenarioUseCase,
  ){}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findOne(id:string) {
  return this.oneScenarioUseCase.execute(id);
 }

 findAll() {
  return this.listScenarioUseCase.execute();
 }

update(id:string,data: UpdateScenarioDto){
  return this.updateScenarioUseCase.execute(id,data);
}

delete(id:string){
  return this.removeScenarioUseCase.execute(id);
}

}