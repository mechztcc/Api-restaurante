const { DataTypes, Model } = require('sequelize');


class Menu extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            restaurant_id: DataTypes.NUMBER
        }, {
            sequelize: connection
        })
    };
    
}


module.exports = Menu;