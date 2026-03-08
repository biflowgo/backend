import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

import { GetBusinessesUseCase } from '../application/get-businesses.use-case';
import { CreateBusinessUseCase } from '../application/create-business.use-case';
import { UpdateBusinessUseCase } from "../application/update-business.use-case";

import { CreateBusinessDto } from "./dto/create-business.dto";
import { UpdateBusinessDto } from "./dto/update-business.dto";
import { BusinessRequestMapper } from "./mapper/business-request.mapper";
import { GetBusinessUseCase } from "../application/get-business.use-case";


@Controller("business")
export class BusinessController {

    constructor(
        private readonly createBusinessUseCase: CreateBusinessUseCase,
        private readonly updateBusinessUseCase: UpdateBusinessUseCase,
        private readonly getBusinessUseCase: GetBusinessUseCase,
        private readonly getBusinessesUseCase: GetBusinessesUseCase
    ){ }

    @Get("/:id")
    async findOne(@Param("id") id: string){
        return await this.getBusinessUseCase.execute(id);
    }

    @Get()
    async findAll(){
        return await this.getBusinessesUseCase.execute();
    }

    @Post()
    async create(@Body() createBusinessDto: CreateBusinessDto){
        const command = BusinessRequestMapper.toCommand(createBusinessDto);
        return await this.createBusinessUseCase.execute(command);
    }

    @Patch("/:id")
    async update(@Param("id") id: string, @Body() updateBusinessDto: UpdateBusinessDto){
        const command = BusinessRequestMapper.toUpdateCommand(id, updateBusinessDto);
        return await this.updateBusinessUseCase.execute(command);
    }
}