import mongoose from 'mongoose'

const { Schema } = mongoose

const questionModel = new Schema(
    {
        questions: { type: Array, default: [] },
        answers: { type: Array, default: [] },
    },
    { timestamps: true }
)

const Questions = mongoose.model('Question', questionModel)

export default Questions