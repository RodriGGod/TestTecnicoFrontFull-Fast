import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserSelected";
import "./styles/App.css";

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

function App() {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Full&Fast</h1>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="layout">
        <div className={`user-list ${selectedUser ? "hidden" : ""}`}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => setSelectedUser(user)}
                isSelected={selectedUser?.id === user.id}
              />
            ))
          ) : (
            <p>No se encontraron usuarios.</p>
          )}
        </div>

        <div
          className={`user-selected ${selectedUser ? "show" : ""}`} 
        >
          {selectedUser ? (
            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
          ) : (
            <p className="help">Selecciona un usuario para ver los detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
