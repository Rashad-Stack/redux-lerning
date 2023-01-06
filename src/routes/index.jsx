import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "../layouts";

import { Contact, Error, Home } from "../pages";
import { AddBook, BooksView } from "../features";

function MainNavigation() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MainNavigation;
