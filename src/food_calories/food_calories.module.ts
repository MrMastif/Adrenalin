import { Module } from '@nestjs/common';
import { FoodCaloriesService } from './food_calories.service';
import { FoodCaloriesController } from './food_calories.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {FoodCalories,FoodCaloriesSchema} from "./food_calories.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: FoodCalories.name, schema: FoodCaloriesSchema }])],
  controllers: [FoodCaloriesController],
  providers: [FoodCaloriesService]

})
export class FoodCaloriesModule {}
