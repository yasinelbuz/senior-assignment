/* eslint-disable @typescript-eslint/no-explicit-any */
// nav.ts
import { generatePath, useNavigate } from 'react-router-dom'

import { USER } from '../config/user'
import { PERMISSIONS } from '../config/permission';

export type RouteParam<T extends string> = T extends `:${infer P}` ? P : never


const routes = [
    {
      name: 'home',
      path: '/',
      permissions: [PERMISSIONS.VIEW_COMMENTS, PERMISSIONS.CREATE_POST]
    },
    {
      name: 'posts',
      path: '/posts',
      permissions: [PERMISSIONS.VIEW_POSTS]
    },
    {
      name: 'post',
      path: '/posts/:id',
      permissions: [PERMISSIONS.VIEW_POSTS],
    },
    {
      name: 'post-edit',
      path: '/posts/:id/edit',
      permissions: [PERMISSIONS.EDIT_POST]
    },
    {
      name: 'post-comments',
      path: '/posts/:id/comments', 
      permissions: [PERMISSIONS.VIEW_COMMENTS]
    },
    {
      name: 'post-create',
      path: 'create',
      permissions: [PERMISSIONS.CREATE_POST]
    },
    {
      name: 'login',
      path: '/login',
      permissions: []
    },
    {
      name: 'forbidden', 
      path: '/403',
      permissions: []
    }
  ];

export const useNav = () => {
  return Object.fromEntries(
    routes.map((route) => {
      const get = (params = {} as any) => generatePath(route.path, params);
      const go = (navigate: ReturnType<typeof useNavigate>) => (params = {} as any) => {
        const hasPermission = !route.permissions || route.permissions.every((p) => USER.permissions.includes(p));

        if (!hasPermission) {
          navigate('/403');
          return;
        }

        navigate(generatePath(route.path, params));
      };

      return [route.name, { get, go }];
    })
  ) as Record<string, { get: (params?: any) => string; go: (navigate: any) => (params?: any) => void }>;
}