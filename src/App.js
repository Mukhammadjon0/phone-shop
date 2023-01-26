import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { StateContext } from "./context";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;
