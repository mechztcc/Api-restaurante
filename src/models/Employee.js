const { DataTypes, Model } = require('sequelize');


class Employee extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            restaurant_id: DataTypes.NUMBER
        }, {
            sequelize: connection
        })
    }
}

module.exports = Employee;