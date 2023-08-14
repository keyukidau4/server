import Questions from '../models/questionSchema.js'
import Datas, { answers } from '../database/data.js'

export const getQuestions = async (req, res) => {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export const insertQuestions = async (req, res) => {
    try {
        Questions.insertMany(
            {
                questions: Datas,
                answers,
            },
            (err, data) => {
                res.json({ msg: 'Data Saved' })
            }
        )
    } catch (error) {
        res.json({ error })
    }
}

export const dropQuestions = async (req, res) => {
    try {
        await Questions.deleteMany()
        res.json({ msg: 'Questionns Deleted' })
    } catch (error) {
        res.json({ error })
    }
}
