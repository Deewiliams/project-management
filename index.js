const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors')
const connectDB = require('./server/config/db')
const schema = require('./schema/schema')
const port = process.env.PORT || 5000

const app = express();

//connecting to db
connectDB();

app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }));

app.listen(port, console.log(`server running on port${port}`))