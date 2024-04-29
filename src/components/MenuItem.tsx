import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderActions>;
};

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
      className=" shadow-lg hover:bg-teal-200 w-full p-5 flex justify-between rounded-xl transition-all"
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
