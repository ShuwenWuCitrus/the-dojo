import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//styles
import "./App.css";
//pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              ></Route>
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              ></Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
