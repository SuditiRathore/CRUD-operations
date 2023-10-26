const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/students')
const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 

const studentSchema = new mongoose.Schema({
    name: String,
    email: String
})
const teacherSchema = new mongoose.Schema({
    name: String,
    email: String
})

const Student = mongoose.model('Student', studentSchema)
const Teacher = mongoose.model('Teacher', teacherSchema)

app.post('/student', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(doc => {
            res.send(doc)
            console.log(doc)
        })
        .catch(err => console.log(err))
})

app.post('/Teacher', (req, res) => {
    let teacher = new Teacher(req.body);
    teacher.save()
        .then(doc => {
            res.send(doc)
            console.log(doc)
        })
        .catch(err => console.log(err))
})

// Get all students
app.get('/teachers', (req, res) => {
    Student.find({})
        .then(docs => {
            console.log(docs)
            res.json(docs)
        })
        .catch(err => console.log(err))
})


app.listen(4000, (res) => {
    console.log('Listening on port 4000')
})
