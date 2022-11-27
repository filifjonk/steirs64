import { Page0 } from "./Page0";
import { Page1 } from "./Page1";
import { Page11 } from "./Page11";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1 />} exact />
            <Route path="/about" element={<Page0 />} exact />
            <Route path="/price" element={<Page2 />} exact />
            <Route path="/works" element={<Page3 />} exact />
            <Route path="/articles" element={<Page4 />} exact />
            <Route path="/article" element={<Page11 />} exact />
            <Route path="/cont" element={<Page5 />} exact />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}
