import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  function addItem(item: MenuItem) {
    const itemExist = order.find((i) => i.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }
  function removeItem(id: MenuItem["id"]) {
    setOrder(order.filter((i) => i.id !== id));
  }

  return { order, addItem, removeItem };
}
