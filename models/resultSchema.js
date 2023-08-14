import mongoose from 'mongoose'

const { Schema } = mongoose

const resultModel = new Schema(
    {
        userName: { type: String },
        result: { type: Array, default: [] },
        attempts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        achived: { type: String, default: '' },
    },
    { timestamps: true }
)

const Results = mongoose.model('Result', resultModel)

export default Results
