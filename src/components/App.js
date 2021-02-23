import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Header from "./Header";
import GlobalStyle from "../styles/global-styles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
