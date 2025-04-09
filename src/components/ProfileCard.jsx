import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const ProfileCard = ({ user, onDelete }) => {
  const { id, name, address, phone, email, avatar } = user;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  return (
    <>
      <div className="card profile-card shadow-sm">
        <div className="card-img-container">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>

        <div className="card-info flex-grow-1">
          <h5 className="mb-2">{name}</h5>
          <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill me-2"></i>{address}</p>
          <p className="text-muted mb-1"><i className="bi bi-telephone-fill me-2"></i>{phone}</p>
          <p className="text-muted mb-0"><i className="bi bi-envelope-fill me-2"></i>{email}</p>
        </div>

        <div className="card-actions d-flex flex-column align-items-end justify-content-start">
          <i className="bi bi-pencil-square mb-2" title="Editar" role="button" onClick={() => navigate(`/editar/${id}`)}></i>
          <i className="bi bi-trash" title="Eliminar" role="button" onClick={() => setShowModal(true)}></i>
        </div>
      </div>

      {/* Modal de borrar */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-confirm">
            <p className="mb-3">¿Seguro que quieres borrar este contacto?</p>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
