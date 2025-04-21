import { useQueryClient } from '@tanstack/react-query';
import { User } from '../types/users';
import { USER } from '../config/user';

// Kullanıcı verilerini almak için hook
export function useUser() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<User | null>(['user']) ?? null;
}

// Giriş işlemi için fonksiyon
export function useLogin() {
  const queryClient = useQueryClient();
  
  const login = () => {
    // Giriş işlemi burada yapılır (örneğin API isteği)
    // Başarılı girişten sonra:
    queryClient.setQueryData(['user'], USER);
  };
  
  return { login };
}

// Çıkış işlemi için fonksiyon
export function useLogout() {
  const queryClient = useQueryClient();
  
  const logout = () => {
    queryClient.setQueryData(['user'], null);
  };
  
  return { logout };
}