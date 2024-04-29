import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "set-tip"; payload: { tip: OrderState["tip"] } }
  | { type: "place-order" };

export type OrderState = {
  data: MenuItem[];
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  data: menuItems,
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === "add-item") {
    const itemExist = state.order.find((i) => i.id === action.payload.item.id);
    let updateOrder: OrderItem[] = [];
    if (itemExist) {
      updateOrder = state.order.map((i) =>
        i.id === action.payload.item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updateOrder = [...state.order, newItem];
    }
    return { ...state, order: updateOrder };
  }
  if (action.type === "remove-item") {
    return {
      ...state,
      order: state.order.filter((i) => i.id !== action.payload.id),
    };
  }
  if (action.type === "set-tip") {
    return { ...state, tip: action.payload.tip };
  }
  if (action.type === "place-order") {
    return { ...state, order: [], tip: 0 };
  }
  return state;
};
