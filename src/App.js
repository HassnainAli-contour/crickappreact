import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Item/itemListContext";
import Nav from "./Nav";
import About from "./Pages/About";
import { ItemListProvider } from "./Pages/Item/itemListContext";
import Items from "./Pages/Item/Items";
import ItemDetail from "./Pages/Item/ItemDetail";
import Cart from "./Pages/Cart/Cart";
import LoginForm from "./Pages/forms/login";
import { Provider } from "react-redux";
import {store} from "./Pages/Cart/CartRedux"
export default function App() {


  return (
    <Router>
      <div className="App">
        <ItemListProvider>
          <Provider store={store}> 
            <Nav />
            <Routes>
              
                <Route path="/items" element={<Items />} />
                <Route path="/items/:id" element={<ItemDetail />} />
                <Route path="/about" element={<About />} />  
                <Route path="/cart" element={<Cart/>} />
              
              <Route path="/login" element={<LoginForm/>} />
              
            </Routes>
          </Provider>
        </ItemListProvider>
      </div>
    </Router>
  )

}