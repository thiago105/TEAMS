import Router from 'express';

import Teams from './app/controllers/TeamControllers';

const routes = new Router();

routes.post('/team', Teams.create);
routes.get('/team', Teams.get);
routes.put('/team', Teams.update);
routes.delete('/team', Teams.delete);

module.exports = routes;
