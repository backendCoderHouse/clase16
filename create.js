import studentModel from "./models/students.js";

import mongoose from "mongoose";

const enviroment = async () => {


    await mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'integrador',
    });

    let response = await studentModel.create(

        {
            first_name: "Leonardo",
            last_name: "Maximo",
            email: "leo@mix.com",
            gender: "Male"

        }
    )

    console.log(response);

}

enviroment();