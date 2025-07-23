// src/components/GoogleLoginButton.tsx
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ Correct
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const decoded: any = jwtDecode(credentialResponse.credential);
      const payload = {
        name: decoded.name,
        email: decoded.email,
        password: decoded.sub, // use sub as fallback password
        role: "USER",
      };

      const res = await axios.post("http://localhost:5009/api/auth/google", payload);
      login(res.data.token); // Save JWT to context/localStorage
      navigate("/");
    } catch (error) {
      console.error("Google login error", error);
      alert("Google authentication failed!");
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <GoogleLogin onSuccess={handleSuccess} onError={() => alert("Google login failed!")} />
    </div>
  );
};

export default GoogleLoginButton;
