import { useEffect, useState } from "react";

type User = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // if you don't understand below code, try to research how JS promises works
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch("http://localhost:3000/api/users", { method: "get" })
      .then((res) => res.json())
      .then((res) => setUsers(res?.data ?? []));
  }, []);

  console.log("Rendering Index.jsx", { users });

  return (
    <>
      <h1>Welcome to Ojo de agua management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.first_name}>{user.first_name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
