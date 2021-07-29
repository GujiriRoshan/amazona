import React from 'react'
import {BrowserRouter,Route} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen"

function App() {
  return (
      <BrowserRouter>
     
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="index.html" className="brand">amazona</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <main>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
      
        </main>

        <footer className="row center">
            All Rights reserved.
        </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
