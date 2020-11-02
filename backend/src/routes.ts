import { Router }  from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

//Rota = conjunto
//Recurso = usuário
//Métodos HTTP = get, post , put , delete
//Parâmetros

//GET = Buscar uma informação ( Lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=vitor
// Route Params: http://localhost:3333/users/1(Identificar um recurso)
// Body: http://localhost:3333/users 

const routes = Router();
const upload = multer(uploadConfig);

//Métodos padrões  index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;
