// routes.ts
import { PERMISSIONS } from './permission'
import HomePage from '../pages/home'
import Forbidden from '../pages/forbidden'
import LoginPage from '../pages/login'
import MainLayout from '../components/main-layout'


import { AuthAndPermissionGuard } from '../components/guard/auth-and-permission-guard'
import Post from '../pages/post'
import PostComments from '../pages/post-comments'
import Posts from '../pages/posts'
import CreateOrEditPost from '../pages/create-or-edit-post'
export const routes = [
  {
    name: 'home',
    path: '/',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.VIEW_COMMENTS, PERMISSIONS.VIEW_POSTS]}><MainLayout><HomePage /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: 'posts',
    path: '/posts',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.VIEW_POSTS]}><MainLayout><Posts /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: 'post',
    path: '/posts/:id',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.VIEW_POSTS]}><MainLayout><Post /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: 'post-edit',
    path: '/posts/:id/edit',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.EDIT_POST]}><MainLayout><CreateOrEditPost /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: 'post-comments', 
    path: '/posts/:id/comments',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.VIEW_COMMENTS]}><MainLayout><PostComments /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: 'post-create',
    path: 'create',
    element: <AuthAndPermissionGuard permissions={[PERMISSIONS.CREATE_POST]}><MainLayout><CreateOrEditPost /></MainLayout></AuthAndPermissionGuard>,
    translations: () => Promise.resolve()
  },
  {
    name: "login", 
    path: "/login",
    element: <LoginPage />, 
    translations: () => Promise.resolve()
  },
  {
    name: 'forbidden',
    path: '/403',
    element: <MainLayout><Forbidden /></MainLayout>,
    translations: () => Promise.resolve()
  },
] as const
