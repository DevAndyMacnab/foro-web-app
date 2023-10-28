import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path:".env"})
//Al crear un nuevo objeto de Sequelize le damos el nombre primero y luego la configuracion
const database = new Sequelize.afterDefine(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false

})

export default database;
