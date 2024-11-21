import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const { signIn, googleSignIn, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success("Welcome back! 🎉");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Welcome! 🎉");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return toast.error("Please enter your email first");
    setIsResetting(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! 📧", { duration: 4000 });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-br-full opacity-20"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-bounce"></div>

      <div className="max-w-md mx-auto px-4 relative">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>

          <div className="absolute top-10 right-10 w-20 h-20 grid grid-cols-2 gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full opacity-30"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full opacity-30"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 relative">
                  Welcome Back
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0"></div>
                </h2>
              </div>
              <p className="text-gray-600 mt-3">Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleResetPassword}
                  disabled={isResetting}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isResetting ? "Sending..." : "Forgot Password?"}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg 
                  hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 py-1 bg-white/80 text-gray-500 rounded-full border border-gray-200/50 backdrop-blur-sm">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg
                hover:bg-gray-50 transition-all duration-300 text-gray-700 font-medium"
            >
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
