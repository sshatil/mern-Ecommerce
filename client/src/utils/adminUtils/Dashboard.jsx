export const totalDeliveredProduct = (orderList) => {
  const deliveredProduct = orderList.map((delivered) => delivered.isDelivered);
  const isDelivered = deliveredProduct.filter(Boolean).length;
  // const isPaid = paidProduct.filter((f) => f === true).length;
  return isDelivered;
};

export const totalPendingProduct = (orderList) => {
  const pendingProduct = orderList.map((delivered) => delivered.isDelivered);
  const isPending = pendingProduct.filter((f) => f === false).length;
  return isPending;
};

export const totalSell = (orderList) => {
  const totalPrice = orderList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
  return totalPrice.toFixed(2);
};
