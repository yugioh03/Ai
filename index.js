const express = require ('express');
const dotnenv = require ('dotenv').config();
const port = process.env.PORT || 5000;

const app = express ();


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/openai', require('./routes/openaiRoutes'));


app.listen(port, () =>console.log(`Server started on port ${port}`));