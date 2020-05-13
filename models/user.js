module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    zipcode: DataTypes.INT,
  });

  User.associate = function (models) {
    User.hasMany(models.Retailers, {
      onDelete: "cascade"
    });
  };

  return User;
};
