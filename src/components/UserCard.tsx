import React from "react";
import "../styles/card.css";

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

interface UserCardProps {
  user: User;
  onClick: () => void;
  isSelected: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick, isSelected }) => {
  return (
    <div
      className={`user-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{user.name}</h3>
      
    </div>
  );
};

export default UserCard;
