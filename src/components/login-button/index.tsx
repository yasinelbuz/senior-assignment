import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/login";

import { useLogout } from "../../services/login";

export default function LoginButton() {
    const user = useUser();
    const { logout } = useLogout();
    const navigate = useNavigate()
    if (user) {
      return (
        <div className="flex items-center gap-4">
          <span className="text-gray-700">{user.name}</span>
          <button 
            onClick={() => {
                logout()
                navigate('/login')
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11.707 4.707a1 1 0 0 0-1.414-1.414L10 9.586 6.707 6.293a1 1 0 0 0-1.414 1.414L8.586 11l-3.293 3.293a1 1 0 1 0 1.414 1.414L10 12.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 11l3.293-3.293z" clipRule="evenodd" />
            </svg>
            Çıkış Yap
          </button>
        </div>
      );
    }
  }