import { useQueryClient } from '@tanstack/react-query';
import { User } from '../types/users';
import { USER } from '../config/user';

export function useUser() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<User | null>(['user']) ?? null;
}

export function useLogin() {
  const queryClient = useQueryClient();
  
  const login = () => {
    queryClient.setQueryData(['user'], USER);
  };
  
  return { login };
}

export function useLogout() {
  const queryClient = useQueryClient();
  
  const logout = () => {
    queryClient.setQueryData(['user'], null);
  };
  
  return { logout };
}