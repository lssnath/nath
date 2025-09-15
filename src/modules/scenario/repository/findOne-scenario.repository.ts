/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class FindOneScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const scenario = await this.prisma.scenario.findUnique({
     where: {id},
    });
    return scenario;
  }
}
