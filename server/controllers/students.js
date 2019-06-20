// Students Route Handler.

const {Students} = require('../models');

const create = async (req, res) => {
  const {firstName, lastName} = req.body;

  if (!firstName) {
    return res.sendStatus(403);
  }

  try {
    const students = await Students.create({
      firstName,
      lastName,
    });

    return res.status(201).send({students});
  } catch (err) {
    return res.sendStatus(400);
  }
};

// const list = async (req, res) => {
//   try {
//     const employees = await Employee.findAll({
//       include: [
//         {
//           model: Role,
//           as: 'roles',
//         },
//       ],
//     });
//     res.status(200).send({employees});
//   } catch (err) {
//     res.sendStatus(400);
//   }
// };

const getStudentsById = async (req, res) => {
  const {id} = req.params;

  if (!id) {
    return res.sendStatus(404);
  }

  try {
    const students = await Students.findByPk(id);

    if (!students) {
      return res.sendStatus(404);
    }

    return res.send({students});
  } catch (err) {
    return res.sendStatus(400);
  }
};

const deleteStudentsById = async (req, res) => {
  const {id} = req.params;

  if (!id) {
    return res.sendStatus(403);
  }

  try {
    const students = await Students.findByPk(id);

    if (!students) {
      return res.sendStatus(404);
    }

    await students.destroy();

    return res.send({students});
  } catch (err) {
    return res.sendStatus(400);
  }
};

const editStudentsById = async (req, res) => {
  const {id} = req.params;

  if (!id) {
    return res.sendStatus(404);
  }

  try {
    const students = await Students.findById(id);

    if (!students) {
      return res.sendStatus(404);
    }

    await students.update(req.body, {fields: Object.keys(req.body)});

    return res.send({employee});
  } catch (err) {
    return res.sendStatus(400);
  }
};

module.exports = {
  create,
  // list,
  getStudentsById,
  deleteStudentsById,
  editStudentsById,
};
