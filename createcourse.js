import studentModel from "./models/students.js";
import courseModel from "./models/courses.js";
import mongoose from "mongoose";

const enviroment = async () => {


    await mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'integrador',
    });

    let response = await courseModel.create(

        {
            title: "Curso de Backend 2023",
            description: "Es un curso para aprender a desarrollar servidores de backend con JS",
            difficulty: 4,
            topics:["Javascript","Node JS","Mongo DB"],
            profesor: "ChrisDev"

        }
    )

    console.log(response);

}

enviroment();