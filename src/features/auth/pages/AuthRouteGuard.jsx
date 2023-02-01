import React from 'react'
import { AuthDialog } from '@/components/auth/AuthDialog';
import { checkLogin } from '@/utils/auth';
import { Outlet } from 'react-router-dom';

export const AuthRouteGuard = () => {
  const isLogin = checkLogin();

  return (
    <>
      {!isLogin ? <AuthDialog isShow /> : <Outlet />}
    </>
  )
}

