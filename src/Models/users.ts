import sequelize from '../utils/database';
import Sequelize from 'sequelize';

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,

    }
})
export default User;