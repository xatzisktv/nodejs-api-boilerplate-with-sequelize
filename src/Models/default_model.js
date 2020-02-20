const Sequelize = require("sequelize");
const sequelize = require("../Middleware/DB");
const Model = Sequelize.Model;

class DefaultModel extends Model {}
DefaultModel.init(
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    default_model: { type: Sequelize.STRING }
  },
  {
    sequelize,
    modelName: "DefaultModel",
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = DefaultModel;
