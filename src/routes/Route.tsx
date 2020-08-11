import React from 'react';

import { useAuth } from '../hooks/AuthContext';

const Route: React.FC = () => {
  const { user } = useAuth();

  return <h1>oi</h1>;
};

export default Route;
