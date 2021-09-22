module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'api-restaurante',
    define: {
        timestamps: true,
        underscored: true
    }
};