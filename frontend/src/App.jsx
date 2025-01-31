import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

import Navbar from "./components/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import {useUserStore} from "./stores/useUserStore.js";
import { use, useEffect } from "react";

import { Navigate } from "react-router-dom";
import LoadingSpinner from "./components/LoaingSpinner.jsx"

function App() {
  const {user, checkAuth, checkingAuth} = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  if (checkingAuth) return <LoadingSpinner/>

  return (
    <div className="bg-gray-200 min-h-screen text-gray-900 overflow-hidden relative">
      <div className="relative z-50 pt-20">
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage/>} />
          <Route path = "/signup" element = {!user ? <SignUpPage/> : <Navigate to = "/" />} />
          <Route path = "/login" element = {!user ? <LoginPage/>: <Navigate to = "/" />} />
          <Route path = "/secret-dashboard" element = {user?.role === "admin" ? <AdminPage/>: <Navigate to = "/" />} />
        </Routes>
      </div>
      <Toaster/>
    </div>
  )
}

export default App
