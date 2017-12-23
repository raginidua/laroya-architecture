module.exports = {
  index: projectsIndex,
  create: projectsCreate,
  show: projectsShow,
  update: projectsUpdate,
  delete: projectsDelete
};

const Project = require('../models/project');

function projectsCreate(req, res) {
  const project = new Project(req.body.project);
  project.save((err, project) => {
    if (err) return res.status(500).json({
      message: 'Something went wrong.',
      err
    });
    return res.status(200).json({ project });
  });
}

function projectsIndex(req, res) {
  Project.find((err, projects) => {
    console.log(err);
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json({ projects });
  });
}

function projectsShow(req, res) {
  Project.findById(req.params.id, (err, project) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!project) return res.status(404).json({ message: 'No user found!'});
    return res.status(200).json({ project });
  });
}

function projectsUpdate(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body.project, (err, project) => {
    if (err) return res.status(500).json({
      message: 'Something went wrong.',
      err
    });
    if (!project) return res.status(404).json({ message: 'No user found!'});
    return res.status(200).json({ project });
  });
}

function projectsDelete(req, res) {
  Project.findByIdAndRemove(req.params.id, (err, project) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!project) return res.status(404).json({ message: 'No project found!'});
    return res.status(200).json({ message: 'project deleted!' });
  });
}
