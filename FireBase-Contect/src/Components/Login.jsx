import React, { useState } from 'react';
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from '../config/FireBase';
import bcrypt from 'bcryptjs';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const LoginAccount = async (e) => {
    e.preventDefault();

    const userQuery = query(
      collection(db, "account"),
      where("email", "==", data.email),
      limit(1)
    );

    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) {
      toast.error("Email does not exist");
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;

    const isMatch = await bcrypt.compare(data.password, userData.password);
    if (!isMatch) {
      toast.error("Invalid password");
      return;
    }

    localStorage.setItem('id', userId);
    toast.success("Login successful");
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-500">
      <form onSubmit={LoginAccount} className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 shadow-2xl text-white w-[25rem]">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-white text-purple-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <span role="img" aria-label="app-logo" className="text-4xl"><img src="Images/Logo.png" alt="" /></span>
          </div>
          <h2 className="text-2xl font-semibold">Login Now</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onChange}
              className="mt-1 w-full px-3 py-2 bg-transparent border-b border-white placeholder-white text-white focus:outline-none"
              // placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={onChange}
              className="mt-1 w-full px-3 py-2 bg-transparent border-b border-white placeholder-white text-white focus:outline-none"
              // placeholder="Password"
              minLength={5}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-purple-500 mt-6 py-2 rounded-full font-semibold transition duration-200 hover:bg-purple-100"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 opacity-75 cursor-pointer">Forgot password?</p>

        <p className="text-sm text-center mt-4 opacity-75">
          Don't have an account? <Link to="/signup" className="font-semibold underline cursor-pointer text-blue-300">Sign Up Now</Link>
        </p>
      </form>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Login;
