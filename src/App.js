import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/itemListContext";
import Nav from "./Nav";
import About from "./Pages/About";
import { ItemListProvider } from "./Pages/itemListContext";
import Items from "./Pages/Items";
import ItemDetail from "./Pages/ItemDetail";


export default function App() {


  return (
    <Router>
      <div className="App">
        <ItemListProvider>
        <Nav />
        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </ItemListProvider>
      </div>
    </Router>
  )

}