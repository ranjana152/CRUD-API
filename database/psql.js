const { Sequelize } = require('sequelize');
const { createUserModel } = require('../model/userSchema.js');
const sequelize = new Sequelize('postgres', 'postgres', 'ranjanadb1508', {
  host: 'localhost',
  dialect:  'postgres'
});
let userModel=null;
const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        userModel=await createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database Synced successfully with pgAdmin");
        // console.log(userModel);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};
module.exports = connection;
module.exports = userModel;