import { useState } from "react"
import { Link } from "react-router-dom";


const LoginPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = () =>{

    }

    const handleLogin = () =>{
        
    }

  return (
<fieldset onSubmit={isRegister ? handleRegister : handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">{isRegister ? "Create Account":"Login"}</legend>

  <label className="label">Email</label>
  <input 
    type="email" 
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="input" 
    placeholder="Email"
    required />


  <label className="label">Password</label>
  <input 
    type="password" 
    className="input" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required />
  {isRegister ? (<div><label className="label">Confirm Password</label>
  <input 
        type="password" 
        className="input" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Comfirm Password"
    /></div>):("")}


    {error && <p className="text-red-500 mb-3 text-sm"></p>}
  <button className="btn btn-neutral mt-4">{isRegister ? "Register" : "Login"}</button>
  <div>
    <p className="pt-4 text-center text-sm">
        {isRegister ? "Already have an account ":"Don't have an account "}
        ? <Link to="" onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Login" : "Create Account"}</Link>
    </p>
  </div>
</fieldset>
  )
}

export default LoginPage