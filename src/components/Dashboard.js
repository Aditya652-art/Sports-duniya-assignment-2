import React from 'react';
import NewsList from './NewsList';
import Payout from './PayoutTable';
import ExportButtons from './ExportButtons';
import Navbar from './Navbar';

const Dashboard = ({ user }) => {
  if (!user) return <p>Please log in</p>;

  return (
    <div className="p-4">
      <Navbar user={user} />
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
      <NewsList />
      {user.role === 'admin' && <Payout />}
      <ExportButtons />
    </div>
  );
};

export default Dashboard;
