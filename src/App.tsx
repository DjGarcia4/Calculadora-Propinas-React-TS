import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";

function App() {
  const { order, addItem, removeItem } = useOrder();
  return (
    <>
      <header className=" bg-gray-700 py-5">
        <h1 className=" text-center text-4xl font-black text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className=" space-y-5 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-5 rounded-xl space-y-10 shadow-xl ">
          <OrderContent order={order} removeItem={removeItem} />
          <OrderTotals order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
