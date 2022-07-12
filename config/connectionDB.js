const Sequelize = require("sequelize");

const sequelize = new Sequelize("feedback", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

const connection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("connection established Successfully!!");
    })
    .catch((error) => {
      console.log("Unable to Connect with DataBase");
    });
};

const sync = () => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("SYNCED!!!");
  });
};

module.exports = { sequelize: sequelize, connection: connection, sync: sync };
