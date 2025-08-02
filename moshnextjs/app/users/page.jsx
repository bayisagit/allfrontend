import React from 'react';

const UsersPage = async () => {
  const res = await fetch('http://localhost:3008/students');
  const users = await res.json();

  return (
    <>
      <h1 className="p-10 bg-base-100 text-base-content text-2xl font-bold">Users</h1>
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
