import { Schema, model, Types } from "mongoose";

const visitorSchema = new Schema({
    visitorId: {
        type: String,
    },
    ipAddress: {
        type: String,
    },

    numberOfVisits: {
        type: Number,
    
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