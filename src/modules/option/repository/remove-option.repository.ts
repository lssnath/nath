import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class removeOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    const Option = await this.prisma.option.delete({
        where: {id}
    });
    return option;
  }
}