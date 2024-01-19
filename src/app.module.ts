import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingsModule } from './training/trainings.module';
import { ExersicesModule } from './exersices/exersices.module';

import { FoodCaloriesModule } from './food_calories/food_calories.module';
import { CalculatorController } from './calculator/calculator.controller';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorModule } from './calculator/calculator.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AppModule,MongooseModule.forRoot('mongodb://localhost:27017/training'), TrainingsModule, ExersicesModule, FoodCaloriesModule, CalculatorModule, UsersModule],
  controllers: [AppController,  CalculatorController ],
  providers: [AppService, CalculatorService],
})
export class AppModule {}