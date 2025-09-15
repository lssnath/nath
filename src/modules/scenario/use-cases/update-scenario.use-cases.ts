/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";
import { UpdateScenarioRepository } from "../repository/update-scenario.repository";

@Injectable()
export class UpdateScenarioUseCase {
    constructor(
        private readonly updateScenarioRepository: UpdateScenarioRepository,
        private readonly logger: Logger,
    ){}

    async execute(id:string, data: UpdateScenarioDto) {
        try {
            const scenario =  this.updateScenarioRepository.update(id,data);
            return scenario;
    } catch (error) {
            this.logger.error(error);
            throw error;  
        }
    }
}