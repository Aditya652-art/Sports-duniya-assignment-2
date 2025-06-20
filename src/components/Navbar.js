import React from 'react';

const Navbar = ({ user }) => (
  <div className="flex justify-between p-4 bg-gray-100 rounded shadow mb-4">
    <h1 className="text-lg font-bold">News Dashboard</h1>
    <p>Logged in as: {user.email}</p>
  </div>
);

export default Navbar;
