/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { FindOneScenarioRepository } from "../repository";

@Injectable()
export class OneScenarioUseCase {
    constructor(
        private readonly findOneScenarioRepository: FindOneScenarioRepository,
        private readonly logger: Logger,
    ){}

    async execute(id: string) {
        try {
            const scenario = await this.findOneScenarioRepository.findOne(id);
            return scenario
    } catch (error) {
            this.logger.error(error);
            throw error;  
        }
    }
}