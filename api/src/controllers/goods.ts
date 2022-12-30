import {Request, Response} from 'express';

import * as goodsService from "../services/goods";

export const getAll = (req: Request, res: Response) => {
  const goods = goodsService.getAll();

  res.send(goods);
};

export const findOne = (req: Request, res: Response) => {
  const { goodId } = req.params;

  const foundGood = goodsService.findGoodById(Number(goodId));

  if (!foundGood) {
    res.sendStatus(404);
    return;
  }

  res.send(foundGood);
}

export const addOne = (req: Request, res: Response) => {
  const { name, colorId } = req.body;

  if (!name || !colorId) {
    res.sendStatus(422);
    return;
  };

  const newGood = goodsService.addGood(name, Number(colorId));

  res.statusCode = 201;
  res.send(newGood)
}

export const deleteOne = (req: Request, res: Response) => {
  const { goodId } = req.params;

  const foundGood = goodsService.findGoodById(Number(goodId));


  if (!foundGood) {
    res.sendStatus(404);

    return;
  }

  goodsService.deleteGoodById(Number(goodId));

  res.sendStatus(204);
}
