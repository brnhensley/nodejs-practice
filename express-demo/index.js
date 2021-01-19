const express = require('express'); // returns function;
const app = express(); // returns express object

// express CRUD methods
// app.post()
// app.get()    args = path, callback with (req, res) args
// app.put()
// app.delete()

app.get('/', (req, res) => {
    res.send("hello therr");
});

app.get('/api/courses', (req, res) => {
    res.send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {        // callback arg is optional
    console.log(`listening on port ${port}`);
});

// Port 
const data = [10, 12, 31, 42, 35, 66, 7];

console.log(process.env);