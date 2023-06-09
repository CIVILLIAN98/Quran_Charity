import React from "react";

import { Navbar } from "../components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/utils";

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(({ id, path, element }) => {
              return <Route key={id} path={path} element={element} />;
            })}
          </Route>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
