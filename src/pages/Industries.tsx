
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Redirect to a default industry (restaurants)
const Industries = () => {
  return <Navigate to="/industries/restaurants" replace />;
};

export default Industries;
