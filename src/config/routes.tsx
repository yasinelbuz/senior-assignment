// routes.ts
import { PERMISSIONS } from './permission'
import HomePage from '../pages/home'
import Forbidden from '../pages/forbidden'
import LoginPage from '../pages/login'
import MainLayout from '../components/main-layout'


import { AuthAndPermissionGuard } from '../components/guard/auth-and-permission-guard'
export const routes = [
  {
    name: 'home',
    path: '/',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.VIEW_COMMENTS, PERMISSIONS.CREATE_POST]}><MainLayout><HomePage /></MainLayout></AuthAndPermissionGuard>,
    permissions: [PERMISSIONS.VIEW_COMMENTS, PERMISSIONS.CREATE_POST],
    translations: () => Promise.resolve()
  },
  {
    name: "login", 
    path: "/login",
    element: <LoginPage />, 
    permissions: [],
    translations: () => Promise.resolve()
  },
  {
    name: 'forbidden',
    path: '/403',
    element: <MainLayout><Forbidden /></MainLayout>,
    permissions: [],
    translations: () => Promise.resolve()
  },
] as const
