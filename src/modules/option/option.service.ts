/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, ListOptionUseCase, OneOptionUseCase, RemoveOptionUseCase, UpdateOptionUseCase } from './use-cases';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly oneOptionUseCase: OneOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly removeOptionUseCase: RemoveOptionUseCase,
  ){}

  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data)
  }

  findAll() {
    return this.listOptionUseCase.execute()
  }

  findOne(id: string) {
    return this.oneOptionUseCase.execute(id)
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, data)
  }

  remove(id: string) {
    return this.removeOptionUseCase.execute(id)
  }
}
