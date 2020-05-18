module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
  });

  User.associate = function (models) {
    User.hasMany(models.Retailers, {
      onDelete: "cascade",
    });
  };

  return User;
};
