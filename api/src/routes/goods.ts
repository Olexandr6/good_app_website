import express, { Router } from 'express';
import * as goodsController from "../controllers/goods";

export const router = Router();

router.get('/', goodsController.getAll);

router.get('/:goodId', goodsController.findOne);

router.post('/', express.json(), goodsController.addOne);

router.delete('/:goodId', goodsController.deleteOne);
