import react from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import ProtectedRoute from "./components/ProtectedRoute"
import SignupStep1 from "./pages/SignupStep1"
import SignupStep2 from "./pages/SignupStep2"
import SignupStep3 from "./pages/SignupStep3"
import SignupStep4 from "./pages/SignupStep4"
import SignupStep5 from "./pages/SignupStep5"
import Header from "./components/header/Header"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (

    <>

<Outlet />

    </>
  )
}

export default App
