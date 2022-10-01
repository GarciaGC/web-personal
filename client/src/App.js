import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import routes from "./config/routes";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<h1>ERROR404</h1>} />
        {
          routes.map((route, index) =>
          (<Route key={index}
            path={route.path}
            element={<route.layout >
              <route.component/>
              </route.layout>}
            />) )
        }
      </Routes>
    </BrowserRouter>

  );
}
export default App;
