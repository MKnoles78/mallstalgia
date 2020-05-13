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

  Retailers.associate = function (models) {
    Retailer.belongsTo(User, {
      as: "store_id",
      through: "user_table",
      foreignKey: "user_id",
    });
}

  return Retailers;
};
