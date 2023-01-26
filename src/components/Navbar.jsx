import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "../context";

function Navbar() {
  const { state } = useContext(StateContext);
  return (
    <nav className="h-20 bg-slate-400 px-28 flex items-center justify-between">
      <NavLink to={"/"}>
        <h1 className="text-2xl font-semibold">Navbar</h1>
      </NavLink>

      <NavLink className="text-2xl font-semibold" to={"/"}>
        Home
      </NavLink>
      <NavLink className="text-2xl font-semibold" to={"/register"}>
        Register
      </NavLink>
      <NavLink className="text-2xl font-semibold" to={"/basket"}>
        Basket
        <sup>{state.basket.length}</sup>
      </NavLink>
    </nav>
  );
}

export default Navbar;
