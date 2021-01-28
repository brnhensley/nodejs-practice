const Joi = require('joi');
const express = require('express'); // returns function;
const app = express(); // returns express object
app.use(express.json()); //needs to be above routes

// express CRUD methods
// app.post()
// app.get()    args = path, callback with (req, res) args
// app.put()
// app.delete()


app.get('/', (req, res) => {
    return res.send("hello therr");
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => { // `:id` is a param
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course ID not found");
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); // destructure result.error
    console.log(req.body);
    if (error) return res.status(400).send(error.details[0].message); //400 bad request error

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {
    //look up course, if not found return 404
    let course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course ID not found");

    //validate, in invablid return 400
    const { error } = validateCourse(req.body); // destructure result.error
    if (error) return res.status(400).send(error.details[0].message);

    //update coures and return
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    //look up course, if not found return 404
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course ID not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

const courses = [
    { id: 1, name: "math" },
    { id: 2, name: "hist" },
    { id: 3, name: "science" }
];

// uses Joi to define the course object requirements: string, 3 chars
const validateCourse = (course) => {
    const courseSchema = { name: Joi.string().min(3).required() };
    return Joi.validate(course, courseSchema);
};

const port = process.env.PORT || 3000;

app.listen(port, () => {        // callback arg is optional
    console.log(`listening on port ${port}`);
});