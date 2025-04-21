import { User } from "../types/users";
import { PERMISSIONS } from "./permission";

// Kullanıcı verisi
export const USER: User = {
    name: 'John Doe',
    permissions: [
      PERMISSIONS.VIEW_POSTS,
      PERMISSIONS.VIEW_COMMENTS,
      // PERMISSIONS.CREATE_POST,
      // PERMISSIONS.EDIT_POST
    ]
  };