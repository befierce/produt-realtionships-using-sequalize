const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelze.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: True,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})


module.exports = User;