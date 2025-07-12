// src/App.jsx
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = (data) => {
    console.log("Registered:", data);
  };

  const handleLogin = (data) => {
    console.log("Logged in:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        {isRegistering ? (
          <>
            <RegisterForm onRegister={handleRegister} />
            <p className="text-sm mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </p>
          </>
        ) : (
          <>
            <LoginForm onLogin={handleLogin} />
            <p className="text-sm mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-green-600 hover:underline"
              >
                Register here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
