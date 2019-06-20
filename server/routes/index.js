const {students: studentsController} = require('../controllers/students');

module.exports = app;

const app = express();
module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Students API!',
    }),
  );

  app.post('/api/students', studentsController.create);
  app.get('/api/students', studentsController.list);
  app.get('/api/students/:id', studentsController.getEmployeeById);
  app.delete('/api/students/:id', studentsController.deleteEmployeeById);
  app.put('/api/students/:id', studentsController.editEmployeeById);
};
