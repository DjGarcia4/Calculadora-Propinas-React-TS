import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
};

const OrderTotals = ({ order }: OrderTotalProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
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
          Propina: <span className="font-black">{formatCurrency(0)} </span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-black">{formatCurrency(0)} </span>
        </p>
      </div>
      <button></button>
    </>
  );
};

export default OrderTotals;
