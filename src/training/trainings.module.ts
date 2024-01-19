import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';
import {Trainings, TrainingsSchema} from "./trainings.schema";
import {Exersices, ExersicesSchema} from "../exersices/exersices.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Trainings.name, schema: TrainingsSchema },{ name: Exersices.name, schema: ExersicesSchema }])],
  controllers: [TrainingsController],
  providers: [TrainingsService]
})
export class TrainingsModule {}
