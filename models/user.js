const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/connectionDB").sequelize;

const user = sequelize.define("user", {
  userID: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    required: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Name not Provided",
    trim: true,
  },

  email: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
    trim: true,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },

  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = user;
