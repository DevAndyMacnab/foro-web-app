import {Router} from 'express'


const router = Router();

//Ruta para postear datos al login
router.post("/login",autenticar);

router.post("/register",registrar)

router.get("/comprobar/:token",comprobar)

router.post("/forget",resetPassword)

//Almacena
router.post("/forget/:token",nuevoPassword)