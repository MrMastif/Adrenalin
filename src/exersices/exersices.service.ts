import {Injectable} from '@nestjs/common';
import mongoose, {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
// import {Trainings} from "./trainings.schema";
import {Exersices} from "../exersices/exersices.schema";
import {ExersicesResponse} from "./exersices.dto";

@Injectable()
export class ExersicesService {
    constructor(@InjectModel(Exersices.name) private exersicesModel: Model<Exersices>) {
    }

    async getExersices():Promise<ExersicesResponse[]> {
        let exersices: any = await this.exersicesModel.find()
        return exersices
    }

    async getExersice(id) {
        return this.exersicesModel.findById(id)

    }

    async createExersices(body) {
        await this.exersicesModel.create(body)
        return {}

    }

    async updateExersice(id, url) {
        await this.exersicesModel.updateOne(id, url)
        return {}
    }


    async deleteExersices(id) {
        // let exersises = await db.collection("exersices").deleteOne({_id: new ObjectId(id)})
        // return {}
        await this.exersicesModel.deleteOne({_id: new mongoose.Types.ObjectId(id)})
        return {}

    }

    async findAll(): Promise<any[]> {
        return await this.exersicesModel.find().exec();
    }
}
