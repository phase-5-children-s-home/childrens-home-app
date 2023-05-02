import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import ChildrensHomeList from './ChildrensHomeList';
import ChildrensHomeForm from './ChildrensHomeForm';
import Analytics from './Analytics';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/childrenshomes">Children's Homes</Link>
          </li>
          <li>
            <Link to="/admin/analytics">Analytics</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/childrenshomes/new" element={<ChildrensHomeForm />} />
        <Route path="/admin/childrenshomes/:id/edit" element={<ChildrensHomeForm />} />
        <Route path="/admin/childrenshomes" element={<ChildrensHomeList />} />
        <Route path="/admin/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
