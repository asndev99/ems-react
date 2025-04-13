import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen p-4">
      <div className="w-full max-w-md border-2 border-emerald-600 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center space-y-6 p-6 sm:p-10 md:p-12"
        >
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            className="w-full text-base sm:text-lg md:text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input with Eye Icon */}
          <div className="relative w-full">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="w-full text-base sm:text-lg md:text-xl outline-none border-2 border-emerald-500 rounded-full py-3 px-5 pr-12 placeholder:text-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
