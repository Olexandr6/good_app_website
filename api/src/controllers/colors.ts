import {Request, Response} from "express";

import * as colorsService from "../services/colors";


export const getAll = (req: Request, res: Response) => {
  const colors = colorsService.getAll();

  res.send(colors);
}

export const findOne = (req: Request, res: Response) => {
  const { colorId } = req.params;

  const foundColor = colorsService.findColorById(Number(colorId));

  if (!foundColor) {
    res.send(404)
    return;
  }

  res.send(foundColor);
}
