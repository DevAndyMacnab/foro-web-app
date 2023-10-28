import { DataTypes} from "sequelize";
import database from "../config/Database.config";
import bcrypt from "bcrypt"

const User = database.define("User", {
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },

    apellido:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    RegistAcademico:{
        type:DataTypes.STRING,
        allowNull:false
    },
    token:DataTypes.STRING,
    confirmado:DataTypes.STRING


},{
    hooks:{
        beforeCreate:async function (usuario){
            const salt= await bcrypt.genSalt(10)
            usuario.password=await bcrypt.hash(usuario.password , salt);

        }
    }

}
);

User.prototype.verificarPassword= function(password){
    return bcrypt.compareSync(password, this.password)
}
export default User;