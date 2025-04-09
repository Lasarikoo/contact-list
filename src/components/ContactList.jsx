import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";


const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const loadContacts = () => {
    fetch("https://playground.4geeks.com/contact/agendas/lazaro/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.contacts);
      })
      .catch((error) => console.error("Error al obtener contactos", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/lazaro/contacts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al borrar contacto");
        // Eliminar el contacto del estado
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Lista de contactos</h3>
          <button className="btn btn-success" onClick={() => navigate("/crear")}>
          <i className="bi bi-person-plus me-2"></i> Añadir contacto
        </button>
      </div>
      {loading ? (
        <p>Cargando contactos...</p>
      ) : contacts.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        contacts.map((contact) => (
          <ProfileCard
            key={contact.id}
            user={{
              id: contact.id,
              name: contact.name,
              address: contact.address,
              phone: contact.phone,
              email: contact.email,
              avatar: "https://beltrangarcia.com/media/Lazaro.jpg",
            }}
            onDelete={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
