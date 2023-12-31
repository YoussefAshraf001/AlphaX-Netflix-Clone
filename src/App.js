import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Helmet>
      <title>AlphaX - Watch TV Shows, Movies, and more</title>
    </Helmet>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<ProtectedRoute><Account /> </ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;