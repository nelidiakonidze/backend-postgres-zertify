const getTableData = (req, res, db) => {
  db.select('*')
    .from('students2')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({dataExists: 'false'});
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}));
};

const postTableData = (req, res, db) => {
  const {id, name, lastname} = req.body;
  const added = new Date();
  db('students2')
    .insert({id, name, lastname})
    .returning('*')
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({dbError: 'db error'}));
};

const putTableData = (req, res, db) => {
  const {id, name, lastname} = req.body;
  db('students2')
    .where({id})
    .update({id, name, lastname})
    .returning('*')
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({dbError: 'db error'}));
};

const deleteTableData = (req, res, db) => {
  const {id} = req.body;
  db('students2')
    .where({id})
    .del()
    .then(() => {
      res.json({delete: 'true'});
    })
    .catch(err => res.status(400).json({dbError: 'db error'}));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData,
};
