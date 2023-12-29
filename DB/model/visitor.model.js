import { Schema, model, Types } from "mongoose";

const visitorSchema = new Schema({
    visitorId: {
        type: String,
    },
    browserIp: {
        type: String,
    },

    numberOfVisits: {
        type: Number,
        default:1,
    },
    emailsContent: {
        type: [String],
    },
    email: {
        type: String,
    },


}, {
    timestamps: true
})


const visitorModel = model('Visitor', visitorSchema)
export default visitorModel