/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { removeOptionRepository } from "../repository/remove-option.repository";

@Injectable()
export class RemoveOptionUseCase {
    constructor(
        private readonly removeOptionRepository: removeOptionRepository,
        private readonly logger: Logger,
    ){}

    async execute(id: string) {
        try {
            const option = this.removeOptionRepository.delete(id);
            return option
    } catch (error) {
            this.logger.error(error);
            throw error;  
        }
    }
}