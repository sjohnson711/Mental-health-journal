const express = require("express");
const app = express();
const PORT = 8383;

const cors = require("cors");

const data = {
    name: 'Seth',
    occupation: 'software engineer advocate (mental health)',
    title: 'Man after God heart'
}

app.use(cors()); // allows all traffic but I can specify

// app.use(cors({
//     origin: "http//localhost:8383"
// }));

app.get('/', (req, res) => {
    console.log("This is home");
    res.send('<h1>This is the home page<h1>')
})




//API FROM THE BACKEND
app.get('/api/users', (req, res) => {
    console.log('Sending over the data')
    res.send(data)
})