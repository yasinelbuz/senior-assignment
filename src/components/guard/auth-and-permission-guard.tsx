import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../services/login';

type Props = {
    children: ReactElement,
    permissions: string[]
}

export const AuthAndPermissionGuard: FC<Props> = ({ children, permissions = [] }) => {
    const user = useUser();
    const hasPermission = !permissions.length || permissions.every(p => user?.permissions?.includes(p));
  
    if(!user){
        return <Navigate to="/login" replace /> 
    }

    if (!hasPermission) {
      return <Navigate to="/403" replace />
    }
  

  
    return children
  }