import { use, Suspense } from 'react';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const userPromise = fetchUsers();

const Users = () => {
  const users = use(userPromise);

  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          
        </div>
      ))}
    </ul>
  );
};

function App() {
  return (
    <Suspense fallback={<h1>Loading espere...</h1>}>
      <Users />
    </Suspense>
  );
}

export default App;