import { useState, useEffect } from "react";
import axios from "axios";

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

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const { data } = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
          setUsers(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    return { users, loading, error };
  };
