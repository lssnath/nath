import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';


@Injectable()
export class UpdateOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id:string, data: UpdateOptionDto) {
    const option = this.prisma.option.update({
        where: {id},
      data,
    });
    return option;
  }
}