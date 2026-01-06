import { connect } from "mongoose"

const dbConncet = async () => {
    try {
        const mongoDbConncetion = await connect(process.env.CONNECTION_STRING)
        console.log(`Database connected: ${mongoDbConncetion.connection.host}`);
    } catch (error){
        console.log(`Database connection is failed ${error}`);
        process.exit(1);
    }
};

export default dbConncet;