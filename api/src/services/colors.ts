const colors = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' },
];

export function getAll() {
  return colors;
}

export function findColorById(colorId: number) {
  const foundColor = colors.find(color => color.id === Number(colorId));

  return foundColor || null;
}
