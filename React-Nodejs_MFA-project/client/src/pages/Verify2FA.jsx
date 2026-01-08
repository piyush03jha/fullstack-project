import { useNavigate } from 'react-router-dom';
import TwoVerification from '../component/TwoVerification'

const Verify2FA = () => {
  const navigate = useNavigate();

  const handleVerification = async (data) => {
    if(data){
      navigate("/");
    }
    
  };
  const handle2FAreset = async (data) => {
    if (data){
      navigate("/setup-2fa");
    }
    
  };
  return (
    <TwoVerification onVerifySuccess={handleVerification} onResetSuccess={handle2FAreset} />
  )
}

export default Verify2FA