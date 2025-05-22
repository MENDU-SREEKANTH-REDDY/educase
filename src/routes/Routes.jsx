import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import User from '../pages/User.jsx';
import Protected from './Protected.jsx';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/user"
        element={
          <Protected>
            <User />
          </Protected>
        }
      />
    </RouterRoutes>
  );
}
