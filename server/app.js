const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(Error, err.message);
    });

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});