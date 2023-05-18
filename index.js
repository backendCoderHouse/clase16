import userModel from "./models/users.js";

import mongoose from "mongoose";

const enviroment = async () => {


    await mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'integrador',
    });

    //let response = await userModel.find().explain('executionStats');


    //BUSCANDO POR NOMBRE 
    let response = await userModel.find({first_name:"Celia"}).explain('executionStats');

    console.log(response)

}

enviroment();
