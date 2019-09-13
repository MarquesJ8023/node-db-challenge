const express = require('express');
const server = express();


server.use(express.json());

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    });
    
});

server.get('/api/resources', (req, res) => {
    db('resources')
    .then(resources => {
        res.status(200).json(resources);
    });

});

module.exports = server;