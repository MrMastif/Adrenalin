import { Injectable } from '@nestjs/common';
import mongoose, {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {FoodCalories} from "./food_calories.schema";
import {Food_caloriesDTO} from "./food_calories.dto";
import {Exersices} from "../exersices/exersices.schema";

@Injectable()
export class FoodCaloriesService {
    constructor(@InjectModel(FoodCalories.name) private foodcaloriesModel: Model<FoodCalories>) {
    }




    async createCalculator(body) {
        let keys = Object.keys(body)
        const food = await this.foodcaloriesModel.findById(body).populate("food_calories")
        let result = 0
        // @ts-ignore
        for (let item of food) {
            result = result + item.calories * +body[item.name]

        }
        await this.foodcaloriesModel.create(body)
        return {}
    }
    async deleteFoodCalories(id) {
        // const training = await db.collection("trainings").deleteOne({_id: new ObjectId(id)})
        return this.foodcaloriesModel.findById(id).populate("food_calories")
    }
    async findAll(): Promise<any[]> {
        return await this.foodcaloriesModel.find().exec();
    }

}
