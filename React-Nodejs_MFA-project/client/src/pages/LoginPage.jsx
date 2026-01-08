import { useNavigate } from "react-router-dom";
import LoginForm from "../component/LoginForm"
import { useSession } from "../context/SessionContext";

const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useSession();

  const handleLoginSuccess = (userData) => {
    console.log("The logged in userdata : ", userData);
    login(userData);
    if(!userData.isMFActive){
      navigate("/setup-2fa");
  }else{
    navigate("/verify-2fa");
  }
}
  return (
    <div><LoginForm onLoginSuccess = {handleLoginSuccess} /></div>
  )
}

export default LoginPage;