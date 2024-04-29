import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};

const OrderTotals = ({ order, tip, dispatch }: OrderTotalProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => tip * subtotalAmount, [tip, subtotalAmount]);
  const totalAmount = useMemo(
    () => tipAmount + subtotalAmount,
    [tipAmount, subtotalAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-black">{formatCurrency(subtotalAmount)} </span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-black">{formatCurrency(tipAmount)} </span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-black">{formatCurrency(totalAmount)} </span>
        </p>
      </div>
      <button
        className=" w-full bg-gray-700 p-3 uppercase text-white font-bold mt-10 rounded-lg  transition-all disabled:opacity-15"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
