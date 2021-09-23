const { DataTypes, Model } = require('sequelize');


class Menu extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    };
    
}


module.exports = Menu;