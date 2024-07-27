import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./Reducer";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input className="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} placeholder="username" style={{ height: "40px", width: "300px", borderRadius: "5px", borderWidth: "1px", borderColor: "#D3D3D3" }} /><br/>
      <input className="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} placeholder="password" type="password" style={{ height: "40px", width: "300px", borderRadius: "5px", borderWidth: "1px", borderColor: "#D3D3D3", marginTop: "10px" }}/><br/>
      <button className="wd-signin-btn" onClick={signin} style={{ color: "white", backgroundColor: "#1E90FF", height: "40px", width: "300px", border: "none", borderRadius: "5px", marginTop: "10px" }}> Sign in </button>
      <br />
      <Link className="wd-signup-link" to="/Kanbas/Account/Signup" >Sign up</Link>
    </div>
  );
}
