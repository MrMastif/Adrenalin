import { Module } from '@nestjs/common';
import { ExersicesController } from './exersices.controller';
import { ExersicesService } from './exersices.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Exersices, ExersicesSchema} from "./exersices.schema";
import {Trainings, TrainingsSchema} from "../training/trainings.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Trainings.name, schema: TrainingsSchema },{ name: Exersices.name, schema: ExersicesSchema }])],
  controllers: [ExersicesController],
  providers: [ExersicesService]

})
export class ExersicesModule {}
