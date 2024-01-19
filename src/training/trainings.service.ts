import {Injectable} from '@nestjs/common';
import mongoose, {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Trainings} from "./trainings.schema";
import {Exersices} from "../exersices/exersices.schema";


@Injectable()
export class TrainingsService {
    constructor(@InjectModel(Trainings.name) private trainingsModel: Model<Trainings>,
                @InjectModel(Exersices.name) private exersicesModel: Model<Exersices>) {
    }

    async getTrainings() {
        return this.trainingsModel.find().populate("exersices")
    }

    async getTraining(id) {
        return this.trainingsModel.findById(id).populate("exersices")
    }

    async createTraining(body) {
        let data = {
            _id: new mongoose.Types.ObjectId(),
            name: body.name,
            duration: body.duration,
            weight_category: body.weight_category,
            exersices: body.exersices.map((e) => new mongoose.Types.ObjectId(e))
        }
        await this.trainingsModel.create(data)
        return {}
    }
    ///// ПРОПИСАТЬ ДО КОНЦА/////
    // async updateTraining(id, body) {
    //     const training = await db.collection("trainings").findOne({_id: new ObjectId(id)})
    //     if (training) {
    //         await db.collection("trainings").updateOne({_id: new ObjectId(id)}, {$set: body})
    //
    //     }
    //     return {}
    // }

    async updateTraining(id, body) {
      await this.trainingsModel.findById(id,body).populate("exersices")
        return {}
    }

    async deleteTraining(id) {
        // const training = await db.collection("trainings").deleteOne({_id: new ObjectId(id)})
        return this.trainingsModel.findById(id).populate("exersices")
    }
    async findAll(): Promise<any[]> {
        return await this.trainingsModel.find().exec();
    }
}
