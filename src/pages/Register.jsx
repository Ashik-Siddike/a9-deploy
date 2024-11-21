import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Password validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Welcome to Winter Donation! 🎉");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-bl-full opacity-20"></div>
      <div className="absolute top-40 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-600 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-400 rotate-45 opacity-20 animate-spin-slow"></div>

      <div className="max-w-md mx-auto px-4 relative">
        {/* Card with glass effect */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>

          {/* Content remains same but with enhanced styles */}
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Create Account
              </h2>
              <p className="text-gray-600 mt-2">
                Join us in making a difference
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

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

              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Photo URL
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaImage />
                  </span>
                  <input
                    type="url"
                    name="photo"
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="Enter photo URL"
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-blue-800 mb-2">
                  Password Requirements:
                </p>
                <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                  <li>At least 6 characters long</li>
                  <li>Include one uppercase letter</li>
                  <li>Include one lowercase letter</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg 
                  hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
