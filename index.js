const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.get('/projects/:index', (req, res) => {
  const { index } = req.params;
  
  return res.json(projects[index]);
});

server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  projects.push({ id, title });

  return res.json(projects)
});

server.put('/projects/:index', (req, res) => {
  const { index } = req.params;
  const { title } = req.body;
  const { tasks } = req.body;

  projects[index] = { index, title, tasks };

  return res.json(projects);
});

server.delete('/projects/:index', (req, res) => {
  const { index } = req.params;

  projects.slice(index, 1)

  return res.json(projects)
});

server.post('/projetcs/:index/tasks', (req, res) => {
  const { index } = req.params;
  const { tasks } = req.body;

  projects[index] = { tasks };

  return res.json(projects[index])
});


server.listen(3000);