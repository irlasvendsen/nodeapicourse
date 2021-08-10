const express = require('express');
const app = express();
//const port = 3000;
//const users = [];

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.use('/', require('./route/router'));

// const dotenv = require('dotenv');
// dotenv.config();

// app.get('/users/', (req, res) => {
//   res.send(messageOfTheDay())
// })

// app.post('/user/', (req, res) => {
//     console.log(req.params, req.hasBody, req.body)
//     return res.sendStatus(200)
// });
   
//   app.put('/user/:id', (req, res) => {
//     return res.send('Received a PUT HTTP method');
//   });
   
//   app.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method');
//   });


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})