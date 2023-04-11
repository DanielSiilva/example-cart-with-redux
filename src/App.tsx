

import { Cart } from "./components/Cart/Cart";
import { Catalog } from "./components/Catalog/Catalog";

import {Provider} from  'react-redux'
import store from "./store";

export function App() {
  return (
    <>
      <Provider store={store}>
        <Catalog />
        <Cart />
      </Provider>
    </>
  )
}

