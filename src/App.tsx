import { useReducer } from "react";

import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentajeForm from "./components/TipPercentajeForm";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
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
            {state.data.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="p-5 rounded-xl space-y-10 shadow-xl ">
          {state.order.length > 0 ? (
            <>
              <OrderContent order={state.order} dispatch={dispatch} />
              <TipPercentajeForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
