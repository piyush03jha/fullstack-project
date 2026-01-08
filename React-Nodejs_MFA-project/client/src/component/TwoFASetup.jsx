import { useEffect, useState } from 'react';
import { setup2FA } from '../service/authApi';

const TwoFASetup = ({ onSetupComplete }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({});

  const fetchQRCode = async () => {
    const { data } = await setup2FA();
    console.log(response);
    setResponse(data);
  }

  useEffect(() => {
    fetchQRCode();
  }, []);

  const copyClipBoard = async () => {
    await navigator.clipboard.writeText(response.secret);
    setMessage("Secret Copied to clipboard!")
  }

  return (
    <div  className="bg-white rounded-lg shadow-md w-full max-w-sm max-auto">
      <div className="pt-6">
        <h2 className="text-3xl text-center font-extralight ">Turn on 2FA Verification</h2>
      </div>
      <hr className="text-gray-200 mt-6 mb-6"/>
      <p className="text-center text-gray-600 text-lg font-light px-6">
        Scan the QR code using an authenticator app 
      </p>
      <div className='p-6'>
        <div className='flex justify-center'>
          <img src={response.qrCode} alt="2FA QR Code" className='mb-4 border rounded-md'/>
        </div>
        <div className='flex items-center mt-3 mb-3'>
            <div className='border-t border-2 border-gray-200 grow'></div>
            <div className='text-gray-600 text-sm font-light px-2'>QR enter the code manually</div>
            <div className='border-t border-2 border-gray-200 grow'></div>
        </div>
        <div className='mb-6'>
          {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
          <input 
           readOnly
          value={response.secret || ""}
          className='w-full text-sm text-gray-600 p-4 border rounded mt-2'
          onClick={copyClipBoard}
          />
        </div>
        <button onClick={onSetupComplete} className="w-full bg-blue-500 text-white rounded-md py-2">Continue to Verification</button>
      </div>
    </div>
  );
};

export default TwoFASetup;
