import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/crear" element={<CreateContact />} />
        <Route path="/editar/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
};

export default App;
