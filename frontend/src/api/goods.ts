import axios from "axios";

import { Good } from '../types/Good';

const BASE_URL = 'http://localhost:5000/goods';

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

export const getGoodById = async (goodId: number): Promise<Good> => {
  const response = await axios.get(`${BASE_URL}/${goodId}`);

  return response.data;
};

export const addGood = async (
  name: string,
  colorId: number,
): Promise<Good> => {
   const response = await axios.post(BASE_URL, {
    name,
    colorId,
  })

  return response.data;
};

export const removeOneGood = async (goodId: number): Promise<void> => {
  const response = await axios.delete(`${BASE_URL}/${goodId}`);

  return response.data;
};
