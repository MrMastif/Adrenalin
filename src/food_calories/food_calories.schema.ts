import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type FoodCaloriesDocument = mongoose.HydratedDocument<FoodCalories>;


@Schema()
export class FoodCalories {
@Prop({type: mongoose.Schema.Types.ObjectId})
_id: mongoose.Schema.Types.ObjectId

    @Prop()
    name: string;

    @Prop()
    protein: number;

    @Prop()
    fats: number;

    @Prop()
    carbohydrates: number;

    @Prop()
    calories: number

    @Prop()
    image:string
}

export const FoodCaloriesSchema = SchemaFactory.createForClass(FoodCalories);