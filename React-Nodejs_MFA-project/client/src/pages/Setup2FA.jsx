import { useNavigate } from 'react-router-dom';
import TwoFASetup from '../component/TwoFASetup';

const Setup2FA = () => {
  const navigate = useNavigate();
  const handleSetupComplete = () => {
    navigate("/verify-2fa");
  }
  return (
    <div><TwoFASetup onSetupComplete={handleSetupComplete} /></div>
  )
}

export default Setup2FA