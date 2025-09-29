/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly oneOptionUseCase: OneOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly removeOptionUseCase: RemoveOptionUseCase,
  ){}

  create(createOptionDto: CreateOptionDto) {
    return 'This action adds a new option';
  }

  findAll() {
    return `This action returns all option`;
  }

  findOne(id: number) {
    return `This action returns a #${id} option`;
  }

  update(id: number, updateOptionDto: UpdateOptionDto) {
    return `This action updates a #${id} option`;
  }

  remove(id: number) {
    return `This action removes a #${id} option`;
  }
}
