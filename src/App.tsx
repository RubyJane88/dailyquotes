import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuotesPage from "./app/views/QuotesPage";

function App() {
  return (
    <div className="App">
      <h1>Daily Quotes to Ponder </h1>
      <QuotesPage />
    </div>
  );
}

export default App;
