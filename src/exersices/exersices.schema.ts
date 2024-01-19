import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ExersicesDocument = mongoose.HydratedDocument<Exersices>;

@Schema()
export class Exersices {
    @Prop({type: mongoose.Schema.Types.ObjectId})
    _id: mongoose.Schema.Types.ObjectId

    @Prop()
    name: string;

    @Prop()
    weight: number;

    @Prop()
    approaches: number;

    @Prop()
    quantity: number;

    @Prop()
    pulse: number;

    @Prop({type: [String]})
    categories: string[]

    @Prop()
    image: string

}

export const ExersicesSchema = SchemaFactory.createForClass(Exersices);