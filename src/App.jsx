import React from "react";
import "./App.css";
import ListGifs from "./components/ListGifs";

import { Route,Link } from "wouter"
const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h1>App </h1>
        </Link>
        <Link href="/gif/goku">goku</Link> <Link to="/gif/morti">morti</Link> <Link to="/gif/brucelee">bruce lee</Link>
        <Route 
        component={ListGifs}
        path="/gif/:keyWord"
        />
      </section>
    </div>
  );
};

export default App;
