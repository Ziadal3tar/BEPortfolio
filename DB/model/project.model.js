import { Schema, model, Types } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'project name is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 20 char']
    },
    description: {
        type: String,
        required: [true, 'project description is required'],
        min: [20, 'minimum length 20 char'],
        max: [200, 'max length 200 char']
    },
    images: {
        type: [String],
        required: [true, 'project images is required'],
    },
    publicImagesIds: [String],
    technologies: {
        type: Array,
        required: [true, 'technologies is required'],
    },
    // name: {
    //     type: String,
    //     required: [true, 'project name is required'],
    //     min: [2, 'minimum length 2 char'],
    //     max: [20, 'max length 20 char']
    // },
    types: {
        type: Array,
        required: [true, 'type is required'],
    },
    link: {
        type: String,
        required: [true, 'link is required'],
    },
    code: {
        type: String,
        required: [true, 'code is required'],
    },

}, {
    timestamps: true
})


const projectModel = model('Project', projectSchema)
export default projectModel