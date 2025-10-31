import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) return null;

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="px-5 py-2 text-sm font-medium text-white bg-zinc-600 rounded-full hover:bg-zinc-700 transition-all duration-300"
    >
      Login
    </button>
  );
};

export default LoginButton;
