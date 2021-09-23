const { DataTypes, Model } = require('sequelize');


class Restaurant extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            user_id: DataTypes.NUMBER
        }, {
            sequelize: connection
        })
    }
}

module.exports = Restaurant;