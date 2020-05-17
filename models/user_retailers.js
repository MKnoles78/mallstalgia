module.exports = function (sequelize, DataTypes) {
  const Retailers = sequelize.define("Retailers", {
    retailer: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Retailers;
  
};