import { useNavigate } from "react-router-dom";
import { logoutUser } from "../service/authApi";

const HomePage = () => {
  const navigate = useNavigate();
  const {user, logout} = useSession();

  const handleLogout = async () => {
try {
  const { data } = await logoutUser();
  logout(data)
  navigate("/login");
} catch (error) {
    console.log("Error", error.message);
}
  }

  return (
    <div className="p-6 bg-white rounded-lg shodow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Welcome, {user.username}!
      </h2>
      <p>you have successfully logged in and verified your 2FA.</p>
      <button 
      type="button"
      className="bg-red-500 text-white py-2 px-4 rounded mt-4"

      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage