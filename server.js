const express = require('express');
const server = express();
const ProjectRouter = require('./projects/projects-router.js');
const db = require('./data/dbConfig.js')

server.use(express.json());

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`server running on ${port}`)
})

server.use('/api/projects', ProjectRouter);


module.exports = server;