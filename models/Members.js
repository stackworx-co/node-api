
const Sequelize = require("sequelize");

module.exports = Sequelize.define("Members",{
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoincrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(250),
    status: Sequelize.STRING(50)

});