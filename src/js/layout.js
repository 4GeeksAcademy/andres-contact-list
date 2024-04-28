import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./views/AddContact.jsx"; // Adjust these imports based on your actual file structure
import ContactList from "./views/ContactList.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/add" element={<AddContact />} />
                <Route path="/" element={<ContactList />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;