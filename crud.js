const mongoose=require('mongoose')
mongoose.set('strictQuery', true);

//connection of node and mongo
//returns promise--- holds output and tells in future
mongoose.connect("mongodb://127.0.0.1:27017/project")
.then(()=>console.log("Connection Successful..."))
.catch(()=>console.log(err));


//this is the schema or the structure of document
const createSchema= new mongoose.Schema({
    employee_name: String,
    employee_department: String,
    employee_salary: Number
});



//model creation where first Create is the "class" and 2nd Create is "collection name"
const Create= new mongoose.model("data",createSchema);


//create  a document using async/await and try/catch to insert ONE
// const createDocument= async ()=> {
//     try{
//         const newDoc= new Create({
//             name:"Suditi Rathore",
//             age:22
//         });
//         const result= await newDoc.save(); //waits for the save function to complete
//         console.log(result);

//     }
//     catch(err){}
// }
// createDocument();




//create  a document using async/await and try/catch to insertMany
const createDocument= async ()=> {
    try{
        
        const result= await Create.insertMany([
            {

                "employee_name" : "Riya Verma",
                "employee_department" : "IT",
                "employee_salary":"90000"
            },
            {
            
                "employee_name" : "Saransh Gupta",
                "employee_department" : "Finance",
                "employee_salary":"75000"
            },
            {
            
                "employee_name" : "Harsh Sehgal",
                "employee_department" : "Production",
                "employee_salary":"60000"
            },
            {
            
                "employee_name" : "Arihant Kumar",
                "employee_department" : "Marketing",
                "employee_salary":"85000"
            },
            {
            
                "employee_name" : "Ananya Sharma",
                "employee_department" : "Human Resource Management",
                "employee_salary":"50000"
            }
        ]); //waits for the save function to complete
        

    }
    catch(err){}
}
//createDocument();

const getDocument=async()=>{
    try{
        const result =await Create.find({employee_name:"Harsh Sehgal"})
        .select({name:1})
        .limit(3);
        console.log(result);
    }
    catch(err){}
}
getDocument();


const updateDocument=async()=>{
    try{
        const result= await Create.updateMany ({age:22},{
            $set:{
                age:20,
            }
        })
        console.log(result);

    }
    catch(err){

    }
}

//updateDocument();

const deleteDocument= async()=>{
    try{
        const result= await Create.deleteMany({age:20});
        console.log(result);

    }
    catch(err){}
}

//deleteDocument();