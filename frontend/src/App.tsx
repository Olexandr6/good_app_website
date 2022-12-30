import React, { useEffect, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { Color } from './types/Color';
import { GoodWithColor } from './types/GoodWithColor';
import { GoodsList } from './components/GoodsList';
import { AddGoodForm } from './components/AddGoodForm';
import { getAllColors } from './api/colors';
import { addGood, getAllGoods, removeOneGood } from './api/goods';

const getColorById = (colors: Color[], colorId: number) => {
  const foundColor = colors.find(color => color.id === colorId);

  return foundColor || null;
};

const getGoodsWithColors = (
  goods: Good[],
  colors: Color[],
): GoodWithColor[] => {
  return goods.map(good => ({
    ...good,
    color: getColorById(colors, good.colorId),
  }));
};

// const goodsFromSever = [
//   { id: 1, colorId: 1, name: 'Dumplings' },
//   { id: 2, colorId: 2, name: 'Carrot' },
//   { id: 3, colorId: 3, name: 'Eggs' },
//   { id: 4, colorId: 1, name: 'Ice cream' },
//   { id: 5, colorId: 2, name: 'Apple' },
//   { id: 6, colorId: 3, name: 'Bread' },
//   { id: 7, colorId: 1, name: 'Fish' },
//   { id: 8, colorId: 2, name: 'Honey' },
//   { id: 9, colorId: 3, name: 'Jam' },
//   { id: 10, colorId: 1, name: 'Garlic' },
// ];

// const colorsFromServer = [
//   { id: 1, name: 'red' },
//   { id: 2, name: 'green' },
//   { id: 3, name: 'blue' },
// ];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  const getGoods = async () => {
    try {
      const goodsFromServer = await getAllGoods();

      setGoods(goodsFromServer);
    } catch (error: any) {
      console.log(error.message);

      console.log('error', error.message);
    }
  };

  const getColors = async () => {
    try {
      const colorsFromServer = await getAllColors();

      setColors(colorsFromServer);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log('error', error.message);
    }
  };

  const addNewGood = async (name: string, colorId: number) => {
    try {
      await addGood(name, colorId);
      await getGoods();
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const removeGood = async (goodId: number) => {
    try {
      await removeOneGood(goodId);
      await getGoods();
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  useEffect(() => {
    getGoods();
    getColors();
  }, []);

  const allGoodsWithColors = getGoodsWithColors(goods, colors);

  return (
    <div className="App">
      <GoodsList goods={allGoodsWithColors} removeGood={removeGood} />

      <AddGoodForm
        addNewGood={addNewGood}
        colors={colors}
      />
    </div>
  );
};
