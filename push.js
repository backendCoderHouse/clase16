import studentModel from "./models/students.js";
import courseModel from "./models/courses.js";
import mongoose from "mongoose";

const enviroment = async () => {


    await mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'integrador',
    });

    let student = await studentModel.findOne({_id:"64677e98ac566c95c5b4dba1"})

    //console.log(student);
    
    student.courses.push({course:"6466b212ebb4de664076316c"});

   let result = await studentModel.updateOne({_id:"64677e98ac566c95c5b4dba1"},student)

   console.log(result);
}

enviroment();