import { useNav } from "../hooks/use-nav"
import { useLogin, useUser } from "../services/login"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const { login } = useLogin()
    const user = useUser()
    const navigate = useNavigate()
    const nav = useNav();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <button
        onClick={async () => {
            try {
                if (user?.name) {
                    nav.home.go(navigate)();
                    return;
                }
                
                await login();
                nav.home.go(navigate)();
            } catch (error) {
                console.error('Login failed:', error);
            }
        }}
      className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
    >
      Login
    </button>
  </div>
  )
}
