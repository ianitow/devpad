import React from 'react';
import AuthRoutes from './auth.js';
import AppRoutes from './app.js';
import Loading from '../components/Loading/index';
import { useAuth } from '../contexts/auth';

const Routes = () => {
  const { signed, loading } = useAuth();
  console.log(signed, loading);

  // if (loading) {
  //   console.log('oi1');

  //   return <Loading />;
  // }
  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;