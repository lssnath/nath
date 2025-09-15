/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { removeScenarioRepository } from "../repository/remove-scenario.repository";

@Injectable()
export class RemoveScenarioUseCase {
    constructor(
        private readonly removeScenarioRepository: removeScenarioRepository,
        private readonly logger: Logger,
    ){}

    async execute(id: string) {
        try {
            const scenario = this.removeScenarioRepository.delete(id);
            return scenario
    } catch (error) {
            this.logger.error(error);
            throw error;  
        }
    }
}