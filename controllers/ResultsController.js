import Results from '../models/resultSchema.js'

export const getResults = async (req, res) => {
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const insertResults = async (req, res) => {
    try {
        const { userName, result, attempts, points, achived } = req.body
        if (!userName && !result) throw new Error('Data Nt Provided...!')
        Results.insertMany({ userName, result, attempts, points, achived }, (err, data) => {
            res.json({ msg: 'Result Saved Success!' })
        })
    } catch (error) {
        res.json({ error })
    }
}

export const dropResults = async (req, res) => {
    try {
        await Results.deleteMany()
        res.json({ msg: 'Result Deleted' })
    } catch (error) {
        res.json({ error })
    }
}
