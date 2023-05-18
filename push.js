import studentModel from "./models/students.js";
import courseModel from "./models/courses.js";
import mongoose from "mongoose";

const enviroment = async () => {


    await mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'integrador',
    });

    let student = await studentModel.find({_id:""})

    

    student.courses.push({course:""});

    let result = await studentModel.updateOne({_id:""},student)
}

enviroment();