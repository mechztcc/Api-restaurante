const { DataTypes, Model } = require('sequelize');


class Plate extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            time: DataTypes.STRING
        }, { 
            sequelize: connection
        })
    }

}


module.exports = Plate;