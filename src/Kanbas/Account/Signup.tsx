import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./Reducer";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} style={{ height: "40px", width: "300px"}}
             className="wd-username form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" style={{ height: "40px", width: "300px"}}
             className="wd-password form-control mb-2" placeholder="password" />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2" style={{ height: "40px", width: "300px"}}> Sign up </button><br />
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}
