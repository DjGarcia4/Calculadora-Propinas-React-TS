import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      onClick={() => addItem(item)}
      className=" shadow-lg hover:bg-teal-200 w-full p-5 flex justify-between rounded-xl transition-all"
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
