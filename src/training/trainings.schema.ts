import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Exersices} from "../exersices/exersices.schema";


export type TrainingsDocument = mongoose.HydratedDocument<Trainings>;

class WeightCategory {
    @Prop()
    min: number;

    @Prop()
    max: number;

}

@Schema()
export class Trainings {
    @Prop({type: mongoose.Schema.Types.ObjectId})
    _id: mongoose.Schema.Types.ObjectId

    @Prop()
    name: string;

    @Prop()
    duration: number;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Exersices"}]})
    exersices: Exersices[];


    @Prop({type: WeightCategory})
    weight_category: WeightCategory

}

export const TrainingsSchema = SchemaFactory.createForClass(Trainings);