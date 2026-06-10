const mapOrder = <T>(
  originalArray: T[],
  orderArray: string[],
  key: keyof T,
): T[] => {
  if (!originalArray || !orderArray || !key) return [];

  // Tạo Map để mapping các item theo key
  const itemsMap = new Map(
    originalArray.map((item) => [item[key] as string, item]),
  );

  // Map các id theo order và filter ra
  const orderedArray = orderArray
    .map((id) => itemsMap.get(id))
    .filter((item) => item !== undefined);

  return orderedArray;
};

export { mapOrder };
