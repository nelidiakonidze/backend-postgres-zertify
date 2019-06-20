module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('students', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Students;
};
