import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showCartModal = () => {
    setIsModalOpen(true);
  }
  const hideCartModal = () => {
    setIsModalOpen(false);
  }
  return (
    <CartProvider>
      {isModalOpen && <Cart closeCartModal={hideCartModal} />}
      <Header openCartModal={showCartModal} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
