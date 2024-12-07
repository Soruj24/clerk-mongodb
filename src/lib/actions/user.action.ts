"user server";

import User from "@/model/User";
import connectDB from "../db";


const createUser = async (user: any) => {
    try {
        await connectDB();

        const newUser = await User.create(user);



        return JSON.parse(JSON.stringify(newUser))


    } catch (error) {
        console.log(error)
    }
}

export default createUser