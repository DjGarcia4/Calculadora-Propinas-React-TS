import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";

type orderContentProps = {
  order: OrderItem[];
  dispatch: React.Dispatch<OrderActions>;
};

const OrderContent = ({ order, dispatch }: orderContentProps) => {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>
      <div className=" space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "remove-item", payload: { id: item.id } })
              }
              className="bg-red-500 h-8 w-8 font-bold text-white rounded-full hover:bg-red-600 transition-all"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContent;
