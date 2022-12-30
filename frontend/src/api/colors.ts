import { Color } from '../types/Color';
import axios from "axios";

const BASE_URL = 'http://localhost:5000/colors';

export const getAllColors = async (): Promise<Color[]> => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

export const getColorById = async (colorId: number): Promise<Color> => {
  const response = await axios.get(`${BASE_URL}/${colorId}`);

  return response.data;
};
