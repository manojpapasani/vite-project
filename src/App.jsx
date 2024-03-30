import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from './Components/ProductSlice';
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
const store=configureStore({
reducer:{
  products:productReducer,
},
});

const App=()=>{
  return(
    <Provider store={store}>
<div>
  <h1>CRUD Application</h1>
  <ProductList/>
  <ProductForm/>
  
</div>
    </Provider>
  );

};
export default App;