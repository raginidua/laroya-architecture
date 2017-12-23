const express  = require('express');
const router   = express.Router();

const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const projects = require('../controllers/projects');

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/projects')
  .get(projects.index)
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(projects.update)
  .delete(projects.delete);

module.exports = router;
