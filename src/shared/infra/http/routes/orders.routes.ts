/* eslint-disable camelcase */
import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateOrderService from '../services/CreateOrderService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const ordersRouter = Router();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      quantity: Joi.number().required(),
      total_cost: Joi.number().required(),
      product_id: Joi.number().required(),
    },
  }),
  async (request, response) => {
    const { quantity, total_cost, product_id } = request.body;

    const createProduct = new CreateOrderService();

    const order = await createProduct.execute({
      quantity,
      total_cost,
      product_id,
    });

    return response.json(order);
  },
);

// ordersRouter.put('/', (request, response) => {
// Editar umpedido
// });

// ordersRouter.delete('/', (request, response) => {
// Remover um pedido
// });

export default ordersRouter;