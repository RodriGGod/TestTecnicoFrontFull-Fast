import React from "react";
import "../styles/selected.css";

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UserSelectedProps {
  user: User | null;
  onClose: () => void;
}

const UserSelected: React.FC<UserSelectedProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="user-content" onClick={(e) => e.stopPropagation()}>
      <img src="../user-profile.png" alt="" />
      <h2>{user.name}</h2>

      <div>
        <div className="user-info">
          <p>
            <strong>Id:</strong> {user.id}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
        </div>

        <div className="user-contact">
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {user.phone}
          </p>
        </div>

        <div className="user-other">
          <h3>Other</h3>
          <p>
            <strong>Website:</strong> <br />{user.website}
          </p>
          <p>
            <strong>Dirección:</strong> <br /> {user.address.street},{" "}
            {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default UserSelected;
