import { Body, Controller, Get, Post } from "@nestjs/common";

import { GetBusinessesUseCase } from '../application/get-businesses.use-case';
import { CreateBusinessUseCase } from '../application/create-business.use-case';

import { CreateBusinessDto } from "./dto/create-business.dto";
import { BusinessRequestMapper } from "./mapper/business-request.mapper";


@Controller("business")
export class BusinessController {

    constructor(
        private readonly createBusinessUseCase: CreateBusinessUseCase,
        private readonly getBusinessesUseCase: GetBusinessesUseCase
    ){ }

    @Get()
    async findAll(){
        return await this.getBusinessesUseCase.execute();
    }

    @Post()
    async create(@Body() createBusinessDto: CreateBusinessDto){
        const command = BusinessRequestMapper.toCommand(createBusinessDto);
        return await this.createBusinessUseCase.execute(command);
    }
}