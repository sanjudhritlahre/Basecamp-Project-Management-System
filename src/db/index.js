import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Mongo DB Connected!');
    } catch (error) {
        console.error('Mongo DB Connection Error!', error);
        process.exit(1);
    }
}

export default connectDB;