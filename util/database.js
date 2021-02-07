const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecompleate', 'root', 'ishwar', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;