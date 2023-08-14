import mongoose from "mongoose"

const connect = async () => {
    await mongoose.connect(process.env.DB)
}

export default connect